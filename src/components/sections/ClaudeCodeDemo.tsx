import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ClaudeCodeTerminal } from "./ClaudeCodeTerminal";

/**
 * Homepage "what the tool looks like" section.
 *
 * Frames Claude Code as the real instrument behind the strategy work,
 * with a visual break into the brand navy to set this section apart
 * from the surrounding cream surfaces. The terminal animation inside
 * is built to read as the actual Claude Code CLI (welcome banner,
 * "> " prompt, streamed assistant, tool calls, output block) running
 * a VERA-relevant real-estate task.
 */

export function ClaudeCodeDemo() {
  return (
    <section
      aria-labelledby="claude-code-demo-heading"
      className="py-20 md:py-28 bg-[var(--color-bg)]"
    >
      <Container size="wide">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <p className="font-mono text-[11px] uppercase font-semibold tracking-[0.22em] text-[var(--color-accent)] mb-4">
              What it looks like
            </p>
            <h2
              id="claude-code-demo-heading"
              className="font-sans font-semibold tracking-[-0.02em] leading-tight text-[var(--color-heading)] mb-5"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Agentic AI, doing the real work.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] max-w-[640px] mb-10">
              Not slideware. This is an agent turning a discovery call into a
              finished proposal, in your voice, in seconds. The same kind of
              workflow we build around your week, your clients, and your
              content, then hand you the keys.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ClaudeCodeTerminal />
            <p className="font-mono text-[11px] tracking-[0.04em] text-[var(--color-muted)] mt-4">
              Replay of a real workflow. Click the terminal to run it again.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
