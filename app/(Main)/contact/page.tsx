import BookMeeting from "@/components/manual/book-meeting/book-meeting";
import TopSectionStatic from "@/components/manual/header/top-section-static";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { ContactForm } from "./contact-form";

export default function ConatactPage() {
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
            <div className="space-y-6 rounded-md pl-5 pr-5 md:pr-6 md:pl-12 pt-12 md:max-w-[450px] w-full bg-Ttext/20">
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
                    <span className="text-lg text-gray-800">
                      +1 (123) 456-7890
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-Ttext rounded-full">
                    <Mail className="text-white w-12 h-12 p-3" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <span className="text-lg  text-gray-800">
                      support@webngraphic.com
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-Ttext rounded-full">
                    <MapPin className="text-white w-12 h-12 p-3" />
                  </div>
                  <div>
                    <h3 className="text-lg  font-semibold">Address</h3>
                    <span className="text-lg  text-gray-800">
                      123 Design Street, New York, NY
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between border-t border-muted-foreground py-6 items-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  Connect With Us:
                </h2>
                <div className="flex gap-1 items-center">
                  <Image
                    src="/svg/facebook.svg"
                    alt="facebook-icon"
                    width={50}
                    height={50}
                    className="object-contain w-8 h-8"
                  />
                  <Image
                    src="/svg/linkedin.svg"
                    alt="linkedin-icon"
                    width={50}
                    height={50}
                    className="object-contain h-8 w-8"
                  />
                  <Image
                    src="/svg/whatsapp.svg"
                    alt="whatsapp-icon"
                    width={50}
                    height={50}
                    className="object-contain h-8 w-8"
                  />
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
