import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
            <aside className="w-full md:fixed md:top-[64px] md:left-0 md:w-1/4 md:h-[calc(100vh-64px)] md:overflow-y-auto md:z-40 bg-background border-b md:border-r md:border-b-0 p-4">
              <div className="text-lg font-semibold mb-4">Sidebar</div>
              <ul className="space-y-2 text-sm">
                <li>📍 Earth</li>
                <li>🏫 Red Brick University</li>
                <li>📧 Email</li>
                <li>🔗 GitHub</li>
              </ul>
            </aside>

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