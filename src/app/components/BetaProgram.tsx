"use client";
import React from "react";

export default function BetaProgram() {
  return (
    <section className="flex flex-col items-center justify-center p-8 text-white">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Join Our Beta Program
      </h1>
      <p className="text-center text-gray-300 mb-6">
        Help shape the future of brand licensing operations by participating in
        our early access program. Your industry expertise will be invaluable in
        refining our solution.
      </p>
      <button
        className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 transition"
        onClick={() => (window.location.href = "https://tally.so/r/wvxq50")}
      >
        Request Beta Access
      </button>
      <p className="text-sm text-gray-500 mt-2 text-center">
        Limited spots available for industry partners.
      </p>
    </section>
  );
}
