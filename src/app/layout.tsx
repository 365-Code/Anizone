import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Test from "@/components/Test";
import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ani Zone",
  description: "Created By ANOS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
        {/* <script src="https://cdn.plyr.io/3.7.8/plyr.js"></script> */}
        <Script src="https://cdn.rawgit.com/video-dev/hls.js/18bb552/dist/hls.min.js" />
      </head>
      <body className={montserrat.className}>
        <Header />
        <main className="flex-1">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
