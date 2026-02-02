import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://deolaabdulramon.vercel.app/"),

  title: {
    default: "Adeola Abdulramon",
    template: "%s | Adeola Abdulramon",
  },

  description: "Frontend Developer specializing in React, Next.js, and scalable web applications.",

  keywords: [
    "Adeola Abdulramon",
    "Frontend Developer",
    "React Developer",
    "Web Developer",
    "Next.js Developer",
    "Portfolio Website",
  ],

  authors: [{ name: "Adeola Abdulramon" }],
  creator: "Adeola Abdulramon",

  openGraph: {
    title: "Adeola Abdulramon | Frontend Developer",
    description: "Portfolio of Adeola Abdulramon, a Frontend Developer building modern, scalable web applications.",
    url: "http://deolaabdulramon.vercel.app/",
    siteName: "Adeola Abdulramon Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Adeola Abdulramon | Frontend Engineer",
    description: "Frontend Developer building modern web experiences with React and Next.js.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
