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
  metadataBase: new URL("https://webngraphic.com"),
  title: {
    template: "%s | WebNGraphic - Web Development & Graphic Design Services",
    default:
      "WebNGraphic - Professional Web Development & Graphic Design Services",
  },
  description:
    "WebNGraphic offers professional web development and graphic design services to help businesses establish a strong online presence with custom websites and stunning visuals.",
  keywords: [
    "web development",
    "graphic design",
    "website design",
    "UI/UX design",
    "responsive websites",
    "logo design",
  ],
  authors: [{ name: "WebNGraphic Team" }],
  creator: "WebNGraphic",
  publisher: "WebNGraphic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webngraphic.com",
    siteName: "WebNGraphic",
    title:
      "WebNGraphic - Professional Web Development & Graphic Design Services",
    description:
      "Custom web development and graphic design solutions to help your business stand out online with responsive websites and eye-catching visuals.",
    images: [
      {
        url: "/opengraph/home.jpg",
        width: 1200,
        height: 630,
        alt: "WebNGraphic - Web Development & Graphic Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebNGraphic - Web Development & Graphic Design Services",
    description:
      "Custom web development and graphic design solutions to help your business stand out online.",
    images: ["/opengraph/home.jpg"],
    creator: "@webngraphic",
  },
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
