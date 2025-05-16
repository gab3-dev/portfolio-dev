import type { Metadata } from "next";
import { berkleyFont } from "@/fonts";
import "../components/styles/main.scss";
import "./globals.css";


export const metadata: Metadata = {
  title: "GabeDev",
  description: "Let's code it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${berkleyFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
