import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // Get data from environment variables
  const phone = process.env.COMPANY_PHONE || "(123) 456-7890";
  const email = process.env.COMPANY_EMAIL || "contact@webdevagency.com";
  const address =
    process.env.COMPANY_ADDRESS || "123 Web Dev Street, Digital City, 12345";
  const facebookUrl = process.env.FACEBOOK_URL || "#";
  const whatsappUrl = process.env.WHATSAPP_URL || "#";
  const linkedinUrl = process.env.LINKEDIN_URL || "#";
  const companyName = process.env.COMPANY_NAME || "WebnGraphic";

  return (
    <footer className="bg-Mbg">
      <div className="max-w-7xl py-8 w-full px-5 md:px-12 mx-auto">
        <div className="flex gap-8  justify-between flex-col md:flex-row">
          <div className="space-y-4">
            <div className="flex items-center text-white space-x-2">
              <div>
                <Image
                  src="/icons/logoicon.png"
                  alt="icon"
                  className="h-5 w-5"
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-lg font-bold">{companyName}</span>
            </div>
            <p className="text-sm text-gray-300">
              Creating exceptional web experiences that drive business growth.
            </p>
            <div className="flex space-x-4">
              <Link
                href={facebookUrl}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link
                href={whatsappUrl}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.494-1.78-1.67-2.079-.173-.3-.018-.462.13-.61.134-.133.3-.347.45-.52.149-.174.199-.3.3-.498.099-.2.05-.374-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.007-.371-.01-.571-.01-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.483.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Link>
              <Link
                href={linkedinUrl}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-gray-400 mr-2" />
              <a
                href={`tel:${phone}`}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {phone}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 text-gray-400 mr-2" />
              <a
                href={`mailto:${email}`}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {email}
              </a>
            </div>
            <div className="flex items-start">
              <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
              <span className="text-sm text-gray-300">{address}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 py-6 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-300">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link
              href="privacy-policy"
              className="text-xs text-gray-300 hover:text-gray-100 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="terms-of-service"
              className="text-xs text-gray-300 hover:text-gray-100 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="cookie-policy"
              className="text-xs text-gray-300 hover:text-gray-100 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
