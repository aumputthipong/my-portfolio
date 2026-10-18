
// layout.tsx
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

import ThemeProvider from "@/component/ThemeProvider";

// One face for the whole site: headings get their voice from weight and tracking
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-open-sans",
});


export const metadata: Metadata = {
  title: {
    default: "Putthipong Chobngam — Full-stack developer",
    template: "%s · Putthipong Chobngam",
  },
  description:
    "Full-stack developer and KMITL Information Technology graduate. Projects built end to end, from requirements and database design to testing and deployment.",
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
      className={`scroll-smooth ${openSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-canvas text-body min-h-screen flex flex-col overflow-x-hidden">
        <ThemeProvider>
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
