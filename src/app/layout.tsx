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
      <body>
        <nav className="p-4 bg-gray-100">
          <a href="/about-you" className="mr-4">About You</a>
          <a href="/experiences" className="mr-4">Experiences</a>
          <a href="/long-answer" className="mr-4">Long Answer</a>
          <a href="/survey" className="mr-4">Survey</a>
          <a href="/review">Review</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
