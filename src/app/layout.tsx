
// layout.tsx
import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

import ThemeProvider from "@/component/ThemeProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});


export const metadata: Metadata = {
  title: "PortFolio",
  description: "my portfolio website",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
  <html
      lang="en"
      className={`scroll-smooth ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-canvas text-body min-h-screen flex flex-col overflow-x-hidden">
        <ThemeProvider>
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
