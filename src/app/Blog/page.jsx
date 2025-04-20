// "use client";

// import { assets } from "@/assets"; // make sure this is correctly exporting images
// import BlogCard from "@/component/UI/BlogCard/BlogCard";
// import BlogSidebar from "@/component/UI/BlogSidebar/BlogSidebar";
// import Container from "@/component/UI/Container/Container";

// const blogPosts = [
//   {
//     title: "How to Stay Healthy During Winter",
//     description:
//       "Winter can be tough on your immune system. Learn how to stay healthy with our top tips.",
//     imageSrc: assets.blog.b1,
//     date: "April 10, 2025",
//     slug: "stay-healthy-winter",
//   },
//   {
//     title: "Top 5 Foods for Your Heart",
//     description:
//       "Protect your heart by including these superfoods in your daily diet.",
//     imageSrc: assets.blog.b2,
//     date: "April 15, 2025",
//     slug: "heart-healthy-foods",
//   },
//   {
//     title: "The Benefits of Regular Checkups",
//     description:
//       "Routine health checkups can save lives. Find out why you shouldn’t skip them.",
//     imageSrc: assets.blog.b3,
//     date: "April 18, 2025",
//     slug: "benefits-of-checkups",
//   },
//   {
//     title: "Simple Ways to Boost Your Immunity",
//     description:
//       "Discover practical steps to strengthen your immune system naturally.",
//     imageSrc: assets.blog.b4,
//     date: "April 20, 2025",
//     slug: "boost-immunity",
//   },
//   {
//     title: "Daily Habits That Help You Sleep Better",
//     description:
//       "Better sleep starts with good habits. Learn how to reset your body’s rhythm.",
//     imageSrc: assets.blog.b5,
//     date: "April 22, 2025",
//     slug: "sleep-better-habits",
//   },
//   {
//     title: "Managing Stress with Mindfulness",
//     description:
//       "Mindfulness techniques can reduce stress and improve well-being. Here’s how to begin.",
//     imageSrc: assets.blog.b6,
//     date: "April 24, 2025",
//     slug: "stress-management",
//   },
// ];

// const BlogPage = () => {
//   return (
//     <Container>
//       <div className="">
//         <h1 className="text-4xl font-semibold  text-left text-[#3B585E] bg-gray-50 px-5 md:px-20 py-10">
//           Blogs
//         </h1>
//         <div className="flex flex-col md:flex-row gap-8 py-10 px-5 md:px-20">
//           {/* Blog Cards */}
//           <div className="w-full md:w-2/3 space-y-6">
//             {blogPosts.map((post, idx) => (
//               <BlogCard key={idx} {...post} />
//             ))}
//           </div>

//           {/* Sidebar */}
//           <BlogSidebar />
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default BlogPage;

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { assets } from "@/assets";
import BlogCard from "@/component/UI/BlogCard/BlogCard";
import BlogSidebar from "@/component/UI/BlogSidebar/BlogSidebar";
import Container from "@/component/UI/Container/Container";
import Breadcrumb from "@/component/UI/Breadcrumb";

// Dummy posts data (keep as is)
const blogPosts = [
  {
    title: "How to Stay Healthy During Winter",
    description:
      "Winter can be tough on your immune system. Learn how to stay healthy with our top tips.",
    imageSrc: assets.blog.b1,
    date: "April 10, 2025",
    slug: "stay-healthy-winter",
  },
  {
    title: "Top 5 Foods for Your Heart",
    description:
      "Protect your heart by including these superfoods in your daily diet.",
    imageSrc: assets.blog.b2,
    date: "April 15, 2025",
    slug: "heart-healthy-foods",
  },
  {
    title: "The Benefits of Regular Checkups",
    description:
      "Routine health checkups can save lives. Find out why you shouldn’t skip them.",
    imageSrc: assets.blog.b3,
    date: "April 18, 2025",
    slug: "benefits-of-checkups",
  },
  {
    title: "Simple Ways to Boost Your Immunity",
    description:
      "Discover practical steps to strengthen your immune system naturally.",
    imageSrc: assets.blog.b4,
    date: "April 20, 2025",
    slug: "boost-immunity",
  },
  {
    title: "Daily Habits That Help You Sleep Better",
    description:
      "Better sleep starts with good habits. Learn how to reset your body’s rhythm.",
    imageSrc: assets.blog.b5,
    date: "April 22, 2025",
    slug: "sleep-better-habits",
  },
  {
    title: "Managing Stress with Mindfulness",
    description:
      "Mindfulness techniques can reduce stress and improve well-being. Here’s how to begin.",
    imageSrc: assets.blog.b6,
    date: "April 24, 2025",
    slug: "stress-management",
  },
];

// Utility: Convert slug/segment to Title Case
const formatPathName = (segment) => {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const BlogPage = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((seg) => seg);

  return (
    <Container>
      <div className="">
        {/* Heading */}
        <div className="bg-gray-50">
          <h1 className="text-4xl font-semibold text-left text-[#3B585E]  px-5 md:px-20 pt-10">
            Blogs
          </h1>

          <div className="px-5 md:px-20">
            <Breadcrumb />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 py-10 px-5 md:px-20">
          <div className="w-full md:w-2/3 space-y-6">
            {blogPosts.map((post, idx) => (
              <BlogCard key={idx} {...post} />
            ))}
          </div>
          <BlogSidebar />
        </div>
      </div>
    </Container>
  );
};

export default BlogPage;
