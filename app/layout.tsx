import type { Metadata } from "next";
import './ui/globals.css';
import React from "react";
import {roboto} from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Dona con Amor",
  description: "Dona con Amor, organización destinada a realizar donaciones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
