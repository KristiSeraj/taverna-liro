import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Taverna Li-Ro",
  description: "Taverna Li-Ro. Taverna Li-Ro eshte nje taverne e ndodhur ne zonen e Panajas, e cila iu ofron klienteve gatime tradicionale dhe te fresketa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      <Footer />
      </body>
    </html>
  );
}
