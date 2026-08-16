import type { Metadata } from "next";
import ContactClient from "@/app/contact/ContactClient";

export const metadata: Metadata = {
  title: "Explore an Outbound Pilot | VERA Solutions",
  description:
    "Book a call with VERA Solutions to discuss a cold email outbound pilot for your paid media or digital advertising agency.",
  alternates: { canonical: "/outbound/contact" },
};

export default function OutboundContactPage() {
  return <ContactClient outbound />;
}
