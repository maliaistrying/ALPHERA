import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alphera Dashboard",
  description: "Exact visual clone - Alphera Jobs UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#eef1ff] min-h-screen">{children}</body>
    </html>
  );
}
