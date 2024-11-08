import { AiOutlineClockCircle } from "react-icons/ai";
import { BsShield } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";

const challenges = [
  {
    icon: <AiOutlineClockCircle size={32} color="#00A5E3" />, // increased size
    title:
      "Manual artwork review cycles averaging 3-5 business days per submission",
    description: "Delaying market readiness and creating bottlenecks",
  },
  {
    icon: <BsShield size={32} color="#00A5E3" />, // increased size
    title:
      "Contract compliance tracking across multiple territories and product categories",
    description: "Increasing complexity and compliance risk",
  },
  {
    icon: <HiOutlineDocumentText size={32} color="#00A5E3" />, // increased size
    title:
      "Royalty report reconciliation requiring 15-20 hours per quarter per major licensee",
    description: "Labor-intensive process prone to human error",
  },
];

export default function Challenges() {
  return (
    <section
      id={"challenges"}
      className="flex flex-1 relative text-white flex-col items-center justify-center"
    >
      <h1 className="text-2xl font-semibold mb-8 text-center">
        Common Challenges in Brand Licensing Management
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 backdrop-brightness-200 max-w-[500px]"
            style={{
              boxShadow: `
              inset 0 0 0.5px 1px hsla(0, 0%,  100%, 0.3),
              0 0 0 1px hsla(0, 0%, 0%, 0.05),
              0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
              0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
              0 3.5px 6px hsla(0, 0%, 0%, 0.09)
            `,
            }}
          >
            <div className="flex justify-center mb-4">{challenge.icon}</div>
            <h2 className="text-lg font-medium mb-2 text-center">
              {challenge.title}
            </h2>
            <p className="text-gray-400 text-center">{challenge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
