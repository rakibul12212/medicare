"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { assets } from "@/assets";
import Link from "next/link";

const blogData = [
  {
    id: 1,
    date: "DECEMBER 17, 2021",
    title: "Get The Exercise Limited Mobility",
    comments: "2 COMMENTS",
    image: assets.blog.b1,
  },
  {
    id: 2,
    date: "DECEMBER 15, 2021",
    title: "Transfusion Strategy And Heart Surgery",
    comments: "1 COMMENT",
    image: assets.blog.b2,
  },
  {
    id: 3,
    date: "DECEMBER 9, 2021",
    title: "Equipment For The Heart Treatment",
    comments: "0 COMMENTS",
    image: assets.blog.b3,
  },
  {
    id: 4,
    date: "NOVEMBER 28, 2021",
    title: "Robotic-Assisted Surgery In 2021",
    comments: "3 COMMENTS",
    image: assets.blog.b4,
  },
  {
    id: 5,
    date: "NOVEMBER 21, 2021",
    title: "10 Tips for Managing Diabetes",
    comments: "0 COMMENTS",
    image: assets.blog.b5,
  },
  {
    id: 6,
    date: "NOVEMBER 10, 2021",
    title: "How AI is Changing Healthcare",
    comments: "5 COMMENTS",
    image: assets.blog.b6,
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <sub className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-md inline-block">
          BLOG
        </sub>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 pt-5">
          See Our Latest Blog
        </h2>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Autoplay]}
      >
        {blogData.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="bg-gray-100 rounded-lg shadow hover:shadow-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 " />
              <div className="p-5 space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span className="text-blue-600 font-medium">{blog.date}</span>
                  <span>{blog.comments}</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <Link
                  href="/Blog"
                  className="text-blue-600 text-sm inline-flex items-center hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogPage;
