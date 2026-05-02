import { NextResponse } from "next/server";

/**
 * Lead form submission handler.
 *
 * Receives { name, email, company, message } from the /get-started form.
 * Logs the lead and can forward to email/CRM.
 *
 * To enable email notifications, set EMAIL_TO in your Vercel env vars
 * and connect an email service (Resend, SendGrid, etc.)
 */

interface Lead {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Lead;

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Log the lead (visible in Vercel function logs)
    console.log("🔔 New lead submission:", {
      name: body.name,
      email: body.email,
      company: body.company || "—",
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Connect email notification
    // If you add Resend (npm i resend), uncomment:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'VERA <leads@veraconsulting.co>',
    //   to: process.env.EMAIL_TO!,
    //   subject: `New lead: ${body.name} — ${body.company || 'No company'}`,
    //   text: `Name: ${body.name}\nEmail: ${body.email}\nCompany: ${body.company || '—'}\n\n${body.message}`,
    // });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
