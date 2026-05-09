import type { Metadata } from "next";
import { Roboto, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import CookieConsent from "@/components/CookieConsent";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kelvronex | Empowering the Next Generation of Tech Leaders",
  description: "Kelvronex specializes in high-end software solutions, cutting-edge hardware courses, and strategic global collaborations with top institutions and industry giants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">
        <CustomCursor />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
