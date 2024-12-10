import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Own",
  description:
    "First fully decentralized protocol for tokenized real-world assets.",
  icons: {
    icon: [
      {
        url: "./own_white.svg",
        type: "image/svg+xml",
      },
    ],
  },
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
