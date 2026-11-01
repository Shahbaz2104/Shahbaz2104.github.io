import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Muhammad Shahbaz — Full-Stack & AI/ML Engineer";
const description =
  "Full-stack engineer in Karachi building production web apps and data/ML tools with TypeScript, Python, Rust, React, Next.js, FastAPI and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shahbaz2104.github.io"),
  title: {
    default: title,
    template: "%s — Muhammad Shahbaz",
  },
  description,
  keywords: [
    "Muhammad Shahbaz",
    "full-stack developer",
    "AI engineer",
    "machine learning engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Rust",
    "FastAPI",
    "PostgreSQL",
    "Karachi",
  ],
  authors: [{ name: "Muhammad Shahbaz", url: "https://github.com/Shahbaz2104" }],
  creator: "Muhammad Shahbaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Muhammad Shahbaz",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Shahbaz — full-stack engineer with an AI/ML edge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2efe8" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0d0f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen font-sans">
        <ThemeProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
