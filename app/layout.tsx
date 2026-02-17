import React from "react";
import localFont from "next/font/local";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COWBOY WILDMEN | Urban Western Apparel",
  description: "Independent design for the modern rebel. Heavyweight fabrics, urban grit, and western heritage. Built to endure.",
};

const poppins = localFont({
  src: "./fonts/Poppins.woff2",
  variable: "--font-poppins",
  weight: "400",
  preload: false,
});
const raleway = localFont({
  src: "./fonts/Raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
