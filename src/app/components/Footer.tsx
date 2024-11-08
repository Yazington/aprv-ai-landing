import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex flex-1 w-full justify-center items-center bg-gray-900">
      <footer className="flex flex-col items-center p-6 m-6 text-white border-t border-gray-700 space-y-4 w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[18%] justify-center ">
        <div className="flex items-center mb-4">
          <Image
            src="/logo2.png"
            alt="APRV.AI Logo"
            className="h-8 mr-2"
            width={120}
            height={120}
          />
        </div>
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-gray-300 justify-center items-center">
          <a href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-white transition">
            Terms of Service
          </a>
        </nav>
        <div className="w-full border-t border-gray-700 my-4"></div>
        <div className="text-center text-gray-400 text-sm">
          © 2024 APRV.AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
