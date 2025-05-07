"use client";
import Logo from "@/app/(Main)/components/logo";
import { AlignRight, LaptopMinimal, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SubItem {
  label: string;
  href: string;
}

const MainNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const phoneNumber2 = process.env.NEXT_PUBLIC_PHONE_NUMBER2;
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
  const address = process.env.NEXT_PUBLIC_ADDRESS;
  const address2 = process.env.NEXT_PUBLIC_ADDRESS2;

  const subItems: SubItem[] = [
    { label: "Web Development", href: "/web-development" },
    { label: "Graphics Design", href: "/graphic-design" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky bg-Mbg w-full transition-colors border-Sbg duration-500 z-50 ease-in-out top-0 ${
        scrolled ? "bg-Mbg/80 backdrop-blur-2xl border-b shadow-sm" : "bg-Mbg"
      }`}
    >
      <div className="md:hidden px-5 text-white py-2 w-full bg-Sbg flex">
        <div className="flex w-full justify-between gap-5 items-center">
          <Link
            href={`mailto:${emailAddress}`}
            className="flex gap-2 items-center"
          >
            <Mail className="w-3 text-Ttext h-3" />
            <span className="text-sm">{emailAddress}</span>
          </Link>
          <div>
            <Link
              href={`tel:${phoneNumber2}`}
              className="flex gap-2 items-center"
            >
              <Phone className="w-3 h-3 text-Ttext" />
              <span className="text-sm">{phoneNumber2}</span>
            </Link>
            <Link
              href={`tel:${phoneNumber}`}
              className="flex gap-2 items-center"
            >
              <Phone className="w-3 h-3 text-Ttext" />
              <span className="text-sm">{phoneNumber}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-3 md:py-2">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-white flex items-center justify-between">
          <div className="flex items-center">
            <Link href={"/"}>
              <Logo />
            </Link>

            <ul className="md:flex hidden items-center ml-7">
              <div className="group  relative">
                <div className="py-2">
                  <div className="flex items-center gap-2">
                    <LaptopMinimal
                      strokeWidth={`${pathname === "/services" ? 3 : 2}`}
                      className={`w-5 pl-2 h-5`}
                    />
                    <li
                      className={`capitalize ${
                        pathname === "/web-development" ||
                        pathname === "/graphic-design"
                          ? "actived"
                          : ""
                      } nav-option py-1.5 px-1 text-sm`}
                    >
                      Services
                    </li>
                  </div>
                </div>

                {/* Dropdown menu */}
                <div className="absolute scale-90 top-full left-0 w-60 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 py-3 bg-white flex flex-col space-y-2 rounded-md shadow-md transition-all duration-200 ease-in-out">
                  {subItems.map((subItem, index) => (
                    <Link href={subItem.href} key={index}>
                      <div
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-black items-center h-8 p-2 hover:bg-gray-200 rounded-md"
                      >
                        <span>{subItem.label}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href={"/about"}>
                <li
                  className={`capitalize text-sm py-1.5 px-1 nav-option ml-3 ${
                    pathname === "/about" && "actived"
                  }`}
                >
                  About
                </li>
              </Link>
              <Link href={"/contact"}>
                <li
                  className={`capitalize py-1.5 px-1 nav-option text-sm ml-3 ${
                    pathname === "/contact" && "actived"
                  }`}
                >
                  Contact
                </li>
              </Link>
              <Link href={"/portfolio"}>
                <li
                  className={`capitalize py-1.5 px-1 nav-option text-sm ml-3 ${
                    pathname === "/portfolio" && "actived"
                  }`}
                >
                  Portfolio
                </li>
              </Link>
              <Link href={"/blog"}>
                <li
                  className={`capitalize py-1.5 px-1 nav-option text-sm ml-3 ${
                    pathname === "/blog" && "actived"
                  }`}
                >
                  Blog
                </li>
              </Link>
            </ul>
          </div>
          <div className="hidden md:flex gap-5 items-center">
            <Link
              href={`mailto:${emailAddress}`}
              className="flex gap-1 items-center"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">{emailAddress}</span>
            </Link>
            <div>
              <Link
                href={`tel:${phoneNumber2}`}
                className="flex gap-1 items-center"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{phoneNumber2}</span>
              </Link>
              <Link
                href={`tel:${phoneNumber}`}
                className="flex gap-1 items-center"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{phoneNumber}</span>
              </Link>
            </div>
          </div>
          <AlignRight
            className={`md:hidden block transition-all duration-100 ease-in-out cursor-pointer border-white w-8 h-8 ${
              isMenuOpen ? "p-1 border-[2px]" : "p-0 border-0"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        {/* Mobile Menu */}
        <div
          className={`absolute md:hidden text-white transition-all duration-200 ease-in-out block bg-Mbg w-full top-[110px] z-[100] ${
            !isMenuOpen
              ? "h-0 overflow-hidden"
              : "h-[calc(100vh-120px)] overflow-y-auto"
          }`}
        >
          <ul className="flex gap-1 flex-col">
            <Link
              href={"/"}
              className={`px-5 py-1.5 hover:bg-indigo-950 ${
                pathname === "/" && "bg-indigo-900"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Home
            </Link>
            <Link
              href={"/web-development"}
              className={`px-5 py-1.5 hover:bg-indigo-950 ${
                pathname === "/web-development" && "bg-indigo-900"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Web Development
            </Link>
            <Link
              href={"/graphic-design"}
              className={`px-5 py-1.5 hover:bg-indigo-950 ${
                pathname === "/graphic" && "bg-indigo-900"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Graphic Design
            </Link>
            <Link
              href={"/about"}
              className={`px-5 py-1.5 hover:bg-indigo-950 ${
                pathname === "/about" && "bg-indigo-900"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className={`px-5 py-1.5 hover:bg-indigo-950 ${
                pathname === "/contact" && "bg-indigo-900"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Contact
            </Link>
            <Link
              href={"/portfolio"}
              className={`px-5 py-1.5 hover:bg-indigo-950 ${
                pathname === "/portfolio" && "bg-indigo-900"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Portfolio
            </Link>
            <Link
              href={"/blog"}
              className={`px-5 py-1.5 hover:bg-indigo-950 ${
                pathname === "/blog" && "bg-indigo-900"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Blog
            </Link>
          </ul>
          <hr className="text-muted my-2"></hr>
          <div className="px-5 space-y-2">
            <div>
              <h3 className="font-semibold text-sm text-white">
                Phone Number (Global)
              </h3>
              <div className="flex flex-col">
                <Link href={`tel:${phoneNumber}`}>
                  <span className=" hover:underline text-Ttext">
                    {phoneNumber}
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-white">
                Phone Number (Australia)
              </h3>
              <div className="flex flex-col">
                <Link href={`tel:${phoneNumber2}`}>
                  <span className=" hover:underline text-Ttext">
                    {phoneNumber2}
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-white">Email</h3>
              <div className="flex flex-col">
                <Link href={`mailto:${emailAddress}`}>
                  <span className=" hover:underline text-Ttext">
                    {emailAddress}
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 rounded-full bg-white text-black p-0.5 mr-2 mt-0.5" />
              <span className=" text-gray-300">{address}</span>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 rounded-full bg-white text-black p-0.5 mr-2 mt-0.5" />
              <span className=" text-gray-300">{address2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
