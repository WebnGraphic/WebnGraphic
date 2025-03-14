"use client";
import {
  AlignRight,
  ChevronDown,
  ChevronUp,
  LaptopMinimal,
  Mail,
  Phone,
} from "lucide-react";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const subItems: SubItem[] = [
    { label: "Web Development", href: "/web-development" },
    { label: "Graphics Design", href: "/graphics-design" },
    { label: "SEO", href: "/seo" },
    { label: "Digital Marketing", href: "/digital-marketing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full transition-colors duration-500 z-50 ease-in-out top-0 ${
        scrolled
          ? "bg-[#1E2A47]/60 backdrop-blur-2xl  shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto py-[14px] px-5 md:px-10 text-white flex items-center justify-between">
        <div className="flex items-center">
          <Link href={"/"}>
            <span className="text-3xl font-semibold">LOGO</span>
          </Link>

          <ul className="md:flex hidden items-center ml-7">
            <div className="group relative py-2">
              <Link href={"/allservices"}>
                <div className="flex items-center gap-2">
                  <LaptopMinimal
                    className={`w-5 pl-2 h-5 ${
                      pathname === "/allservices"
                        ? "font-semibold text-Stext"
                        : ""
                    }`}
                  />
                  <li
                    className={`capitalize border-r-2 pr-2 border-white text-sm ${
                      pathname === "/allservices"
                        ? "font-semibold text-Stext"
                        : ""
                    }`}
                  >
                    All Services
                  </li>
                </div>
              </Link>

              {/* Dropdown menu */}
              <div className="absolute top-[35px] left-0 w-60 hidden group-hover:block py-3 bg-white flex-col space-y-2 rounded-md">
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
                className={`capitalize text-sm ml-3 ${
                  pathname === "/about" ? "text-Stext font-semibold" : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link href={"/contact"}>
              <li
                className={`capitalize text-sm ml-3 ${
                  pathname === "/contact" ? "font-semibold text-Stext" : ""
                }`}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex gap-5 items-center">
          <div className="flex gap-1 items-center">
            <Mail className="w-4 h-4" />
            <span className="text-sm">abcdefgh@gmail.com</span>
          </div>
          <div className="flex gap-1 items-center">
            <Phone className="w-4 h-4" />
            <span className="text-sm">11111111111</span>
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
        className={`absolute md:hidden text-white transition-all duration-200 ease-in-out block bg-Mbg w-full top-16 z-[100] ${
          !isMenuOpen ? "h-0 overflow-hidden" : "h-[calc(100vh-64px)]"
        }`}
      >
        <div>
          <div className="flex items-center justify-between cursor-pointer ">
            <Link
              className="flex-1 px-5 py-1.5 hover:bg-indigo-950"
              href={"/allservices"}
              onClick={() => setIsMenuOpen(false)}
            >
              All Services
            </Link>
            <span
              className="ml-auto py-1.5 px-5 hover:bg-indigo-950 text-xl"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
            </span>
          </div>
          {isDropdownOpen && (
            <div className="ml-5 flex flex-col space-y-2">
              {subItems.map((subItem, index) => (
                <Link href={subItem.href} key={index}>
                  <div
                    onClick={() => setIsMenuOpen(false)}
                    className="flex text-white items-center h-8 p-2 hover:bg-indigo-950 rounded-md"
                  >
                    <span>{subItem.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <ul className="flex flex-col">
          <Link
            href={"/about"}
            className=" px-5 py-1.5 hover:bg-indigo-950"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className="px-5 py-1.5 hover:bg-indigo-950"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MainNavbar;
