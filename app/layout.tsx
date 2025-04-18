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
          <div className="h-[120px] xl:h-[64px] w-full" />

          <div className="flex flex-col md:flex-row w-full min-h-screen text-muted-foreground">
            <Sidebar />

            <main className="flex-1 md:ml-[25%] p-6 overflow-y-auto">
              <div className="space-y-4">{children}</div>
            </main>
          </div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}