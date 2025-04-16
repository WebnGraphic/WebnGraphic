import BookMeeting from "@/components/manual/book-meeting/book-meeting";
import TopSectionStatic from "@/components/manual/header/top-section-static";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Consultation",
  description:
    "Reach out to WebNGraphic for a free consultation on your web development or graphic design project. We're here to answer your questions and help bring your vision to life.",
  alternates: {
    canonical: "https://webngraphic.com/contact",
  },
  openGraph: {
    title: "Contact WebNGraphic | Web & Design Services",
    description:
      "Get in touch with our team for a free consultation on your next web development or graphic design project.",
    url: "https://webngraphic.com/contact",
    images: [
      {
        url: "opengraph/contact.jpg", // Replace with your actual graphic design OG image
        width: 1200,
        height: 630,
        alt: "WebNGraphic Graphic Design Services",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConatactPage() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
  const address = process.env.NEXT_PUBLIC_ADDRESS;
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_PAGE;
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return (
    <div>
      <TopSectionStatic
        title="Get in Touch"
        description="Have a question or need assistance? Contact us and our team will be happy to help."
        breadcrumb={[{ label: "Contact", link: "/contact" }]}
      />
      <div className="bg-white">
        <div className=" mx-auto py-16 max-w-7xl">
          <div className="flex justify-between flex-col md:flex-row gap-12">
            <div className="space-y-6 rounded-md pl-5 pr-5 md:pr-6 md:pl-12 pt-12 md:max-w-[450px] w-full bg-Ttext/10">
              <div className="space-y-10 pb-10">
                <h2 className="text-3xl font-semibold text-gray-900">
                  Get In Touch
                </h2>
                <div className="flex items-center gap-4">
                  <div className="bg-Ttext rounded-full">
                    <Phone className="text-white w-12 h-12 p-3" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone Number</h3>
                    <Link href={`tel:${phoneNumber}`}>
                      <span className="text-lg hover:underline text-gray-800">
                        {phoneNumber}
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-Ttext rounded-full">
                    <Mail className="text-white w-12 h-12 p-3" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <Link href={`mailto:${emailAddress}`}>
                      <span className="text-lg hover:underline text-gray-800">
                        {emailAddress}
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-Ttext rounded-full">
                    <MapPin className="text-white w-12 h-12 p-3" />
                  </div>
                  <div>
                    <h3 className="text-lg  font-semibold">Address</h3>
                    <span className="text-lg  text-gray-800">{address}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between border-t border-muted-foreground py-6 items-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  Connect With Us:
                </h2>
                <div className="flex space-x-4">
                  <a
                    href={facebookUrl}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="h-8 text-Ttext hover:scale-105 transition duration-200 cursor-pointer w-8" />
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">WhatsApp</span>
                    <IoLogoWhatsapp className="h-8 text-Ttext hover:scale-105 transition duration-200 cursor-pointer w-8" />
                  </a>
                  <span className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="h-8 text-Ttext hover:scale-105 transition duration-200 cursor-pointer w-8" />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 pt-12 pl-5 pr-5 md:pr-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted">
        <BookMeeting />
      </div>
    </div>
  );
}
