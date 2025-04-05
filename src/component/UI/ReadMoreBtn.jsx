import { FiPlus } from "react-icons/fi";

const ReadMoreBtn = () => {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
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
