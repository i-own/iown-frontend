import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iown - Fractional Real Estate Investment",
  description:
    "Invest in premium Airbnb properties worldwide with crypto magic",
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
