import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CONCIERGE AI — Personal Intelligence",
  description: "Your personal intelligence and executive assistant workspace."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
