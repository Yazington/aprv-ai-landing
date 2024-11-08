"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How easy is it to implement APRV.AI?",
    answer:
      "APRV.AI is designed for easy integration with your existing systems. Our team provides comprehensive onboarding support to ensure a smooth implementation process tailored to your specific brand licensing needs.",
  },
  {
    question: "Is my data secure with APRV.AI?",
    answer:
      "We take data security seriously and are building our platform with industry-standard security practices in mind. During our beta phase, we work closely with each partner to ensure appropriate data handling and protection measures are in place.",
  },
  {
    question: "What kind of support does APRV.AI offer?",
    answer:
      "We offer comprehensive support including user training, technical assistance, and regular check-ins to ensure you're getting the most out of APRV.AI. Our support team is available via email, phone, and chat during business hours to assist with any questions or issues.",
  },
  {
    question:
      "Can APRV.AI be customized to our specific brand licensing processes?",
    answer:
      "Absolutely. APRV.AI is built with flexibility in mind. We work closely with each client to understand their unique brand licensing processes and customize the platform accordingly. This ensures that APRV.AI seamlessly fits into your existing workflows and meets your specific needs.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h1>
      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 min-w-[800px]">
            <button
              className="w-full text-left py-4 flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-bold">{faq.question}</span>
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            {activeIndex === index && (
              <div className="bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg transform  backdrop-brightness-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
