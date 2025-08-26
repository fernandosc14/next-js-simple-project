import { Metadata } from "next";

import "./globals.css";

import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Next js",
  description: "Next js with typescript",
  openGraph: {
    title: "Learning Next js",
    description: "Next js with typescript",
  },
  robots:{
    index:true,
    follow:true,
    nocache:true,
    googleBot: {
      index:true,
      follow:true,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
