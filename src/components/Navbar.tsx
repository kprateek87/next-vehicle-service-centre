import { navData } from "@/data/navbar";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-heading",
});

function Navbar() {
  return (
    <nav className="fixed top-6 z-50 w-full px-4 md:px-12">
      <div className="flex items-center justify-between bg-white/95 backdrop-blur-md rounded-full shadow-lg px-4 md:px-8 py-2">
        <FaWhatsapp className="hidden md:block bg-gray-800 text-white size-10 md:size-12 p-2 rounded-full hover:bg-green-600 transition-colors duration-200 cursor-pointer" />

        <div className="flex items-center gap-x-6 md:gap-x-16">
          {navData.map((item, index) => (
            <div key={index}>
              <Link
                href={item.route}
                className={`${montserrat.className} text-sm md:text-base lg:text-lg font-medium text-gray-900 capitalize hover:text-blue-600 transition-colors duration-200`}
              >
                {item.name === "home" ? (
                  <Image
                    src="/images/logo.png"
                    alt="vehicle-service-centre-logo"
                    width={120}
                    height={40}
                    className=" dark:invert w-24 md:w-40"
                  />
                ) : (
                  item.name
                )}
              </Link>
            </div>
          ))}
        </div>

        <FaPhoneAlt className="hidden md:block bg-gray-800 text-white size-10 md:size-12 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200 cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;
