// components/BlogCard.jsx
import Image from "next/image";
import ReadMoreBtn from "../ReadMoreBtn";

export default function BlogCard({
  imageSrc,
  date,
  author = "Admin",
  comments = 0,
  title,
  description,
}) {
  if (!imageSrc) return null; // Avoid rendering if no image

  return (
    <div className="bg-white  shadow-md overflow-hidden mb-6">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center text-xs text-gray-500 space-x-4 mb-2">
          <span>{date}</span>
          <span>{author}</span>
          <span>{comments} Comments</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <ReadMoreBtn variant="primary" />
      </div>
    </div>
  );
}
