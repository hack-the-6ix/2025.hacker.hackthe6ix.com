import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hacker Dashboard",
  description: "2025 Hack the 6ix Hacker Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
