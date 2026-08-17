import type { Metadata } from "next";
import ContactClient from "@/app/contact/ContactClient";

export const metadata: Metadata = {
  title: "Book an Outbound Strategy Call | VERA Solutions",
  description:
    "Book a call with VERA Solutions to discuss an outbound client-acquisition plan for your paid media or digital advertising agency.",
  alternates: { canonical: "/outbound/contact" },
};

export default function OutboundContactPage() {
  return <ContactClient outbound />;
}
