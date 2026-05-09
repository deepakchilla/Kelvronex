import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Admissions & Engineering | Kelvronex Academy",
  description: "Get in touch with Kelvronex Academy. Schedule an architectural consultation, speak to admissions, or inquire about custom corporate tech pathways.",
  openGraph: {
    title: "Contact Admissions & Engineering | Kelvronex Academy",
    description: "Get in touch with Kelvronex Academy. Schedule an architectural consultation, speak to admissions, or inquire about custom corporate tech pathways.",
    type: "website",
    url: "https://kelvronex.com/contact",
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
