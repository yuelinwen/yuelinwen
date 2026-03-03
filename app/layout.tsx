import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "./components/sidebar/page";

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
      <body className="antialiased">
        <Providers>
          <Header />
          <div className="h-[120px] lg:h-[64px] w-full" />

          <div className="flex flex-col lg:flex-row w-full min-h-screen text-muted-foreground">
            <Sidebar />

            <main className="flex-1 lg:ml-[25%] lg:ps-6 lg:pe-96 lg:py-6 p-6 overflow-y-auto">
              <div className="space-y-4">{children}</div>
            </main>
          </div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}