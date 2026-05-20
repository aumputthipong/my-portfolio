
// layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

import MUIThemeProvider from "@/component/ThemeRegistry";


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
  <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray min-h-screen flex flex-col overflow-x-hidden">
        <MUIThemeProvider >
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        </MUIThemeProvider>
      </body>
    </html>
  );
}
