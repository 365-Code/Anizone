import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReduxProvider from "@/redux/provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AniZone - Your Gateway to Animated Worlds",
  description:
    "Welcome to AniZone! Explore a universe of captivating animated content. From classic series to trending hits, we've got it all. Dive into the magic of Japanese animation!",
  keywords: [
    "anime",
    "animation",
    "series",
    "episodes",
    "streaming",
    "Japanese",
    "otaku",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ReduxProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
