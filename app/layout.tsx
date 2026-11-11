
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio | Personal Website",
  description: "Personal portfolio of Fritzgerald Enric T. Imperial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#f7f9f3] text-[#263b2c]`}>
        <Navbar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
