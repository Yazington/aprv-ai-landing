import { MdCheckCircle } from "react-icons/md";
import { BsShield } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";

const productFeatures = [
  {
    icon: <MdCheckCircle size={32} color="#00A5E3" />, // increased size
    title: "Automated Artwork Compliance Check",
    description:
      "Assists in screening submissions against brand guidelines, flags potential violations, maintains approval audit trail",
  },
  {
    icon: <BsShield size={32} color="#00A5E3" />, // increased size
    title: "Contract Compliance Monitor",
    description:
      "Tracks territory and category restrictions, alerts on approaching deadlines, documents amendment history",
  },
  {
    icon: <FaChartPie size={32} color="#00A5E3" />, // increased size
    title: "Royalty Report Automation",
    description:
      "Validates calculations against contract terms, cross-references approved products, flags discrepancies for review",
  },
];

export default function Product() {
  return (
    <div
      id="features"
      className="text-white flex flex-col items-center py-10 w-[100%]"
    >
      <h1 className="text-2xl font-semibold mb-8 text-center">
        APRV.AI: Your Intelligent Brand Licensing Assistant
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productFeatures.map((challenge, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 backdrop-brightness-200 max-w-[500px]"
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
            <div className="flex justify-center mb-4">{challenge.icon}</div>
            <h2 className="text-lg font-medium mb-2 text-center">
              {challenge.title}
            </h2>
            <p className="text-gray-400 text-center">{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
