import { FaHeartbeat, FaFlask, FaBrain } from "react-icons/fa";
import ReadMoreBtn from "../ReadMoreBtn";
import { assets } from "@/assets";

const cardData = [
  {
    icon: (
      <FaHeartbeat
        size={40}
        className="group-hover:text-white text-red-500 transition-colors duration-300"
      />
    ),
    title: "Angioplasty",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum dummy text Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: assets.caregiving.cgs1,
  },
  {
    icon: (
      <FaFlask
        size={40}
        className="group-hover:text-white text-blue-500 transition-colors duration-300"
      />
    ),
    title: "Endocrinology",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum dummy text Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: assets.caregiving.cgs2,
  },
  {
    icon: (
      <FaBrain
        size={40}
        className="group-hover:text-white text-purple-500 transition-colors duration-300"
      />
    ),
    title: "Neurology",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum dummy text  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: assets.caregiving.cgs3,
  },
];

const CareGivingServicesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative group bg-white shadow-md space-y-7 p-6 text-center overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          {/* Image Layer Full Height */}
          <div
            className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Dark Blue Overlay */}
          <div className="absolute inset-0 h-full w-full bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

          {/* Card Content */}
          <div className="relative z-10">
            <div className="mb-4 flex justify-center transition-transform duration-500 group-hover:rotate-y-180">
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300 py-4 ">
              {card.text}
            </p>
            <ReadMoreBtn variant="secondary" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareGivingServicesCard;
