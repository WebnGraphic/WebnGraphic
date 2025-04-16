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
    template: "%s | WebnGraphic - Web Development & Graphic Design Services",
    default:
      "WebnGraphic - Professional Web Development & Graphic Design Services",
  },
  description:
    "WebnGraphic offers professional web development and graphic design services to help businesses establish a strong online presence with custom websites and stunning visuals.",
  keywords: [
    "web development",
    "graphic design",
    "web design",
    "UI/UX design",
    "responsive websites",
    "custom websites",
    "logo design",
    "branding",
  ],
  authors: [{ name: "WebnGraphic", url: "https://webngraphic.com" }],
  creator: "WebnGraphic",
  publisher: "WebnGraphic",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webngraphic.com",
    siteName: "WebnGraphic",
    title:
      "WebnGraphic - Professional Web Development & Graphic Design Services",
    description:
      "WebnGraphic offers professional web development and graphic design services to help businesses establish a strong online presence with custom websites and stunning visuals.",
    images: [
      {
        url: "/opengraph/home.jpg",
        width: 1200,
        height: 630,
        alt: "WebnGraphic - Web Development & Graphic Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WebnGraphic - Professional Web Development & Graphic Design Services",
    description:
      "WebnGraphic offers professional web development and graphic design services to help businesses establish a strong online presence with custom websites and stunning visuals.",
    creator: "@yourtwitter",
    images: ["/opengraph//home.jpg"],
  },
  alternates: {
    canonical: "https://webngraphic.com",
    languages: {
      "en-US": "https://webngraphic.com",
    },
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
