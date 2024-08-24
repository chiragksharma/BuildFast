import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Header from "@components/Header";
import "@styles/globals.css";
import Head from "next/head";

const Bricolage = Bricolage_Grotesque({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bricolage',
 });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Bricolage.className}>
          <Header/>
          {children}
        </body>
    </html>
  );
}