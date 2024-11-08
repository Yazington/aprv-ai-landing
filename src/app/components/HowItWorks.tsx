import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Integration",
      description:
        "Connect with your existing systems via API or secure upload",
    },
    {
      number: "2",
      title: "Configuration",
      description: "Set up your brand guidelines and contract parameters",
    },
    {
      number: "3",
      title: "Automation",
      description: "Implement automated compliance checking workflows",
    },
    {
      number: "4",
      title: "Monitoring",
      description: "Track performance through customizable dashboards",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col text-center justify-center items-center"
        >
          <div className="flex flex-1 justify-center items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white font-bold text-2xl mb-4">
              {step.number}
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <h3 className="text-lg font-semibold mb-2 text-white ">
              {step.title}
            </h3>
          </div>
          <div className="h-[150px]">
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
