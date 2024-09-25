import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Header from "@components/Header";
import "@styles/globals.css";
import Head from "next/head";
import Footer from "@components/Footer";
import { ThemeProvider } from "next-themes";

const Bricolage = Bricolage_Grotesque({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bricolage',
 });

export const metadata: Metadata = {
  title: "BuildFast",
  description: "Nextjs SaaS Landing Page boilerplate",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "BuildFast",
    description: "Create Landing Page in an hour ⌚",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        <title>{String(metadata.title) || "Default Title"}</title>
        <meta name="description" content={metadata.description || "Default description"} />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <body className={Bricolage.className}>
        <ThemeProvider
        defaultTheme="dark"
        enableColorScheme
        themes={['ruby', 'sapphire', 'daylight', 'emerald']}
        >
          <Header/>
            {children}
          <Footer/>
          </ThemeProvider>

        </body>
    </html>
  );
}
