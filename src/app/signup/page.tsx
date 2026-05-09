import type { Metadata } from "next";
import SignupClient from "./SignupClient";

export const metadata: Metadata = {
  title: "Create Your Account | Kelvronex Academy",
  description: "Initialize your learning profile with Kelvronex Academy. Join over 50k successful mentees architecting global software and hardware networks.",
  openGraph: {
    title: "Create Your Account | Kelvronex Academy",
    description: "Initialize your learning profile with Kelvronex Academy. Join over 50k successful mentees architecting global software and hardware networks.",
    type: "website",
    url: "https://kelvronex.com/signup",
  }
};

export default function SignupPage() {
  return <SignupClient />;
}
