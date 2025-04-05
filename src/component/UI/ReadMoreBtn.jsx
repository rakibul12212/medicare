import { FiPlus } from "react-icons/fi";

const ReadMoreBtn = ({ variant = "primary" }) => {
  const baseStyles = "px-6 py-2 rounded font-medium";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-white hover:bg-blue-600 text-blue-600 hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      <div className="flex items-center space-x-1">
        <span>READ MORE</span>
        <span>
          <FiPlus />
        </span>
      </div>
    </button>
  );
};

export default ReadMoreBtn;
