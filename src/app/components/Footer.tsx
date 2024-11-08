import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="flex flex-col items-center p-6 text-white border-t border-gray-700 space-y-4">
      <div className="flex items-center mb-4">
        <Image
          src="/logo2.png"
          alt="APRV.AI Logo"
          className="h-8 mr-2"
          width={120}
          height={120}
        />
      </div>
      <nav className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-300">
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
  );
}
