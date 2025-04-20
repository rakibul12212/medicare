"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

const formatPathName = (segment) => {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((seg) => seg);

  return (
    <div className="flex items-center gap-2 text-gray-600 text-sm pb-6 pt-4">
      <AiFillHome className="text-xl text-[#3B585E]" />
      <Link href="/" className="hover:underline text-[#3B585E]">
        Home
      </Link>

      {pathSegments.map((seg, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        const isLast = index === pathSegments.length - 1;

        return (
          <div key={href} className="flex items-center gap-2">
            <span>{">"}</span>
            {isLast ? (
              <span className="text-[#3B585E] font-medium">
                {formatPathName(seg)}
              </span>
            ) : (
              <Link href={href} className="hover:underline text-[#3B585E]">
                {formatPathName(seg)}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
