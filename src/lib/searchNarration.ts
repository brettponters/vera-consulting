/**
 * Streams the REAL web-search activity of a Claude message stream as
 * "> Searching <query>" and "> Reading <domains>" lines, so the UI can show
 * the model actually working instead of canned placeholder text. Domains are
 * de-duped across the whole run.
 *
 * `ms` is an Anthropic MessageStream (structurally typed here to avoid coupling
 * to the SDK's exported class name). `write` enqueues a chunk to the response.
 */
export function narrateSearch(
  ms: { on(event: "streamEvent", listener: (event: unknown) => void): unknown },
  write: (chunk: string) => void,
): void {
  let searchInput = "";
  let inSearch = false;
  const seenDomains = new Set<string>();
  const announceQuery = (q?: string) => {
    const trimmed = q?.trim();
    if (trimmed) write(`> Searching ${trimmed}\n`);
  };

  ms.on("streamEvent", (event) => {
    const e = event as {
      type: string;
      content_block?: {
        type?: string;
        name?: string;
        content?: unknown;
        input?: { query?: string };
      };
      delta?: { type?: string; partial_json?: string };
    };
    if (e.type === "content_block_start") {
      const cb = e.content_block;
      if (cb?.type === "server_tool_use" && cb?.name === "web_search") {
        if (cb.input?.query) {
          announceQuery(cb.input.query);
          inSearch = false;
        } else {
          inSearch = true;
          searchInput = "";
        }
      } else if (cb?.type === "web_search_tool_result") {
        const items = Array.isArray(cb.content) ? cb.content : [];
        const domains: string[] = [];
        for (const r of items) {
          try {
            const host = new URL((r as { url?: string }).url ?? "").hostname.replace(
              /^www\./,
              "",
            );
            if (host && !seenDomains.has(host)) {
              seenDomains.add(host);
              domains.push(host);
            }
          } catch {
            /* skip unparseable url */
          }
          if (domains.length >= 3) break;
        }
        write(
          domains.length
            ? `> Reading ${domains.join(", ")}\n`
            : "> Reading the results\n",
        );
      }
    } else if (e.type === "content_block_delta") {
      if (inSearch && e.delta?.type === "input_json_delta") {
        searchInput += e.delta.partial_json ?? "";
      }
    } else if (e.type === "content_block_stop" && inSearch) {
      inSearch = false;
      try {
        announceQuery((JSON.parse(searchInput) as { query?: string }).query);
      } catch {
        /* partial json, skip */
      }
    }
  });
}
