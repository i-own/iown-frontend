import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Own - Real Assets On-Chain",
  description:
    "First fully decentralized protocol for tokenized real-world assets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
