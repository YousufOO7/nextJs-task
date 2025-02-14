import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Task",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className="min-h-screen">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}
