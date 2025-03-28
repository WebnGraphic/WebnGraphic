import MainNavbar from "@/components/manual/Navbar/MainNavbar";
import { Toaster } from "@/components/ui/sonner";
import { ResponseModalProvider } from "@/context/response-form-modal";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebnGraphic",
  description: "Generated by create next app",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-Mbg ${geistMono.variable} antialiased`}
      >
        <ResponseModalProvider>
          <MainNavbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ResponseModalProvider>
      </body>
    </html>
  );
}
