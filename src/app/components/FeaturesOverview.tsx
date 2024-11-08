import React from "react";

const features = [
  {
    title: "Artwork compliance assistance",
    description: "AI-supported verification against brand guidelines",
  },
  {
    title: "Contract tracking and alerts",
    description: "Automated monitoring and notification system",
  },
  {
    title: "Automated royalty calculations",
    description: "Streamlined reporting and validation",
  },
  {
    title: "Centralized approval workflow",
    description: "Single platform for all stakeholders",
  },
];

export default function FeaturesOverview() {
  return (
    <section className="flex flex-col items-center justify-center text-center p-8 text-white bg-gray-900">
      <h1 className="text-2xl font-semibold mb-8 text-center">
        Features Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center justify-center text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg items-center justify-center text-center h-[120px] min-h-0 md:min-h-[300px] xl:min-h-[200px]"
            style={{
              boxShadow: `
              inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.3),
              0 0 0 1px hsla(0, 0%, 0%, 0.05),
              0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
              0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
              0 3.5px 6px hsla(0, 0%, 0%, 0.09)
            `,
            }}
          >
            <h2 className="text-lg mb-2 font-bold">{feature.title}</h2>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
