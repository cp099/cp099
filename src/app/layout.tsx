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
  metadataBase: new URL("https://cp099.github.io/cp099"),
  title: {
    default: "Chirag P Patil | Personal OS",
    template: "%s | Chirag P Patil",
  },
  description: "Architecting modular environments and documenting the intersection of technology, finance, and experience.",
  alternates: {
    canonical: "./",
  },

  // --- SEARCH ENGINE VERIFICATION ---
  verification: {
    google: "5pfJNfYFvO2fXBv-gHzz-O131Y6ZuFqwiKsgDKMEI8s",
    other: {
      "msvalidate.01": "6BDFEA2F7F196AEC823FDEB5C843C0D2",
    },
  },

  openGraph: {
    title: "Chirag P Patil | Personal Operating System",
    description: "A modular personal operating system documenting systems engineering, finance, and professional growth.",
    url: "https://cp099.github.io/cp099",
    siteName: "CHIRAG.OS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/cp099/assets/og-image.png", 
        width: 1200,
        height: 630,
        alt: "CHIRAG.OS — Personal Operating System",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chirag P Patil | Personal OS",
    description: "Systems Builder • Exploring Tech & Finance",
    images: ["/cp099/assets/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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