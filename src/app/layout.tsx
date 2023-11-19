import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuki Room",
  description: "Yuki's web page",
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
