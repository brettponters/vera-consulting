import type { Metadata } from "next";
import ContactClient from "@/app/contact/ContactClient";

export const metadata: Metadata = {
  title: "Plan Your B2B Growth | VERA Solutions",
  description:
    "Define a measurable B2B growth target with VERA Solutions and explore the acquisition system required to reach it.",
  alternates: { canonical: "/outbound/contact" },
};

export default function OutboundContactPage() {
  return <ContactClient outbound />;
}
