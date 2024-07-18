import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import useFont from "@/font";

export const metadata: Metadata = {
  title: "AI SaaS Launcher",
  description: "Generated by create next app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const font = useFont()

  return (
    <html lang="en">
    <body className={font.className}>{children}</body>
    </html>
  );
}
