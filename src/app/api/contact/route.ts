export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return Response.json({ error: 'Name is required.' }, { status: 400 });
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'A valid email is required.' }, { status: 400 });
  }
  if (!message || typeof message !== 'string' || message.trim() === '') {
    return Response.json({ error: 'Message is required.' }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
    });
  } else {
    console.log('[contact] No CONTACT_WEBHOOK_URL set — submission logged:', {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });
  }

  return Response.json({ ok: true });
}
