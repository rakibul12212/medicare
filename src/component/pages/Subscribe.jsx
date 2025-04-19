import React from "react";

const Subscribe = () => {
  return (
    <div className="hidden md:flex relative top-16 bg-blue-500 text-white py-10 px-6 mx-20 flex-col md:flex-row items-center justify-center gap-x-10">
      <div className="flex items-center gap-3 text-center md:text-left">
        <span className="text-4xl">📧</span>
        <div className="text-xl  font-semibold">
          Latest Updates <br className="block md:hidden" /> Subscribe To Our
          Newsletter
        </div>
      </div>
      <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full px-4 py-3 rounded-md bg-blue-100 text-black placeholder-gray-600 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
