import type { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Sign In | Kelvronex Academy",
  description: "Access your Kelvronex Academy terminal. Monitor your engineering tracks, submit project repositories, and access certifications.",
  openGraph: {
    title: "Sign In | Kelvronex Academy",
    description: "Access your Kelvronex Academy terminal. Monitor your engineering tracks, submit project repositories, and access certifications.",
    type: "website",
    url: "https://kelvronex.com/login",
  }
};

export default function LoginPage() {
  return <LoginClient />;
}
