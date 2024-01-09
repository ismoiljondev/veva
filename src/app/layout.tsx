import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-[#E4EAF3] fixed w-full top-0 z-10">
          <Header />
        </header>
        <main>{children}</main>
        <footer className="relative w-full bottom-0 bg-white  mt-6">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
