import { ContactCommonForm } from "@/components/manual/form/contact-common-form";
import { Mail, MapPin, Phone } from "lucide-react";
export default function ContactCommon() {
  return (
    <div id="contact-form" className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/ctabg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
      </div>
      <div className="flex relative z-10  md:mx-16 mx-5 py-16 gap-10 justify-between flex-col-reverse md:flex-row ">
        <div className="md:w-1/2 w-full">
          <ContactCommonForm />
        </div>
        <div className="md:w-1/2 w-full mt-5 flex flex-col">
          <h2 className="text-white text-center md:text-left font-bold text-4xl">
            Contact <span className="text-Ttbg-Ttext">Us</span>
          </h2>
          <p className="text-gray-200 mb-8 mt-6">
            For question,technical assistance,or collaboration opportunity via
            the contact information provided
          </p>
          <div className="flex mb-3 items-center gap-3">
            <div className="text-white   rounded-full bg-Ttext">
              <Phone className="w-10 h-10 p-2" />
            </div>
            <p className="text-gray-200">+1212121212</p>
          </div>
          <div className="flex mb-3 items-center gap-3">
            <div className="text-white  rounded-full bg-Ttext">
              <Mail className="p-2 w-10 h-10" />
            </div>

            <p className="text-gray-200">111111111@gmail.com</p>
          </div>
          <div className="flex  items-center gap-3">
            <div className="text-white  rounded-full bg-Ttext">
              <MapPin className=" w-10 h-10 p-2" />
            </div>
            <p className="text-gray-200">Banani,Dhaka,Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="flex md:hidden justify-center">
        <div className="w-20 h-1 bg-Ttext mt-6 md:mt-8"></div>
      </div>
    </div>
  );
}
