import { AiOutlineClockCircle } from "react-icons/ai";
import { BsShield } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";

const benefits = [
  {
    icon: <AiOutlineClockCircle size={32} color="#00A5E3" />,
    title: "Accelerate Reviews",
    description:
      "Significantly reduce artwork review cycles with AI-assisted compliance checking",
  },
  {
    icon: <BsShield size={32} color="#00A5E3" />,
    title: "Strengthen Compliance",
    description:
      "Enhance oversight with automated tracking and proactive alerts",
  },
  {
    icon: <HiOutlineDocumentText size={32} color="#00A5E3" />,
    title: "Minimize Errors",
    description:
      "Improve accuracy in royalty reporting and reduce manual auditing time",
  },
];

export default function KeyBenefits() {
  return (
    <div className="text-white flex flex-col items-center py-10 w-[100%]">
      <h1 className="text-2xl font-semibold mb-8 text-center">Key Benefits</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 backdrop-brightness-200"
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
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <h2 className="text-lg font-medium mb-2 text-center">
              {benefit.title}
            </h2>
            <p className="text-gray-400 text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
