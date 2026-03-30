import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chirag P Patil | Personal OS",
  description: "A modular system for documenting projects, research, and growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased flex flex-col min-h-screen relative suppressHydrationWarning">
        <div className="bg-canvas">
          <div className="absolute -left-[10%] top-[-10%] w-[50%] h-[70%] rounded-full bg-cyan/5 blur-[120px] animate-float" />
          <div className="absolute -right-[10%] bottom-[-10%] w-[50%] h-[70%] rounded-full bg-blue-600/5 blur-[120px] animate-float [animation-delay:2s]" />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <Navigation />
        <main className="container mx-auto px-6 pt-24 flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}