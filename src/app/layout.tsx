
import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

import MUIThemeProvider from "@/component/ThemeRegistry";

export const metadata: Metadata = {
  title: "PortFolio",
  description: "my portfolio website",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
  <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900">
        <MUIThemeProvider >
     
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
        </MUIThemeProvider>
      </body>
    </html>
  );
}
