import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppFAB from "@/components/whatsapp-fab";

export const metadata: Metadata = {
  title: "Anchor Travel Consult | UK Education Specialists",
  description:
    "Professional UK education consultancy for undergraduate, masters, and PhD opportunities in the United Kingdom.",
  keywords: [
    "UK education",
    "education consultancy",
    "study abroad",
    "UK universities",
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Anchor Travel Consult | UK Education Specialists",
    description:
      "Professional UK education consultancy for undergraduate, masters, and PhD opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFAB />
        <Toaster position="bottom-right" theme="light" richColors />
      </body>
    </html>
  );
}
