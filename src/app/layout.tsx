import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AirGuard | Automated Network Management",
  description:
    "AirGuard delivers a self-healing networking solution that guarantees unparalleled uptime and performance for ISPs.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-primary-dark text-primary-light">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
