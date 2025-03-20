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
    { label: "Web Development", href: "/services/web-development" },
    { label: "Web Design", href: "/services/web-design" },
    { label: "Graphics Design", href: "/graphics-design" },
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
      className={`sticky py-2 bg-Mbg w-full transition-colors border-Sbg duration-500 z-50 ease-in-out top-0 ${
        scrolled ? "bg-Mbg/60 backdrop-blur-2xl border-b shadow-sm" : "bg-Mbg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 text-white flex items-center justify-between">
        <div className="flex items-center">
          <Link href={"/"}>
            <span className="text-3xl font-semibold">LOGO</span>
          </Link>

          <ul className="md:flex hidden items-center ml-7">
            <div className="group  relative">
              <Link href={"/services"}>
                <div className="py-2">
                  <div className="flex items-center gap-2">
                    <LaptopMinimal
                      strokeWidth={`${pathname === "/services" ? 3 : 2}`}
                      className={`w-5 pl-2 h-5`}
                    />

                    <li
                      className={`capitalize  nav-option py-1.5  px-1 text-sm ${
                        pathname === "/services" ? "active-link" : ""
                      }`}
                    >
                      All Services
                    </li>
                  </div>
                </div>
              </Link>

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
                  pathname === "/about" ? "text-Stext font-semibold" : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link href={"/contact"}>
              <li
                className={`capitalize py-1.5 px-1 nav-option text-sm ml-3 ${
                  pathname === "/contact" ? "" : ""
                }`}
              >
                Contact
              </li>
            </Link>
            <Link href={"/blog"}>
              <li
                className={`capitalize py-1.5 px-1 nav-option text-sm ml-3 ${
                  pathname === "/blog" ? "" : ""
                }`}
              >
                Blog
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
        className={`absolute md:hidden text-white transition-all duration-200 ease-in-out block bg-Mbg w-full top-12 z-[100] ${
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
