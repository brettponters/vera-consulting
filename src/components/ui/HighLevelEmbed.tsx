"use client";

import Script from "next/script";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/uI7W5zURd6p2E0Lfp82Z";
const FORM_ID = "IIPPJr7CMMbn7XcIGmKF";
const FORM_URL = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;

/** Native HighLevel widgets keep bookings and inquiries in the same CRM. */
export function HighLevelEmbed({ kind }: { kind: "booking" | "inquiry" }) {
  const inquiry = kind === "inquiry";
  const url = inquiry ? FORM_URL : BOOKING_URL;
  const id = inquiry ? `inline-${FORM_ID}` : "vera-discovery-booking";

  return (
    <>
      <iframe
        src={url}
        id={id}
        title={inquiry ? "Send a message to VERA Solutions" : "Book a VERA Discovery Call"}
        style={{ width: "100%", height: inquiry ? 700 : 800, border: 0, borderRadius: 8 }}
        data-layout={inquiry ? "{'id':'INLINE'}" : undefined}
        data-trigger-type={inquiry ? "alwaysShow" : undefined}
        data-activation-type={inquiry ? "alwaysActivated" : undefined}
        data-deactivation-type={inquiry ? "neverDeactivate" : undefined}
        data-form-name={inquiry ? "VERA — Website Inquiry" : undefined}
        data-layout-iframe-id={inquiry ? id : undefined}
        data-form-id={inquiry ? FORM_ID : undefined}
        data-cookie-consent={inquiry ? "true" : undefined}
        data-cookie-consent-provider={inquiry ? "auto" : undefined}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      <p className="mt-3 text-sm text-[var(--color-muted)]">
        Having trouble? <a className="underline" href={url} target="_blank" rel="noopener noreferrer">Open {inquiry ? "the inquiry form" : "the booking calendar"}</a>.
        {inquiry && <> We’ll use your details to respond to your inquiry. <a className="underline" href="/privacy">Privacy policy</a>.</>}
      </p>
    </>
  );
}
