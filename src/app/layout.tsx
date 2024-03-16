import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReduxProvider from "@/redux/provider";

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
