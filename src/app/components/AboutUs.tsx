import React from "react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center p-8 text-white bg-gray-900"
    >
      <h1 className="text-3xl font-semibold mb-4 text-center">About Us</h1>
      <p className="text-center text-gray-300 max-w-3xl leading-relaxed">
        At APRV.AI, we combine deep brand licensing industry expertise with
        advanced technology to address the day-to-day operational challenges
        faced by brand owners, licensees, and licensing agents. Our focus is on
        developing practical solutions that streamline licensing workflows while
        maintaining the high standards required in brand licensing.
      </p>
    </section>
  );
}
