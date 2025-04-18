import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Yuelin Wen",
  description: "Yuelin's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('flex min-h-screen flex-col antialiased')}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
