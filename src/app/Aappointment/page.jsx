"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumb from "@/component/UI/Breadcrumb";
import Container from "@/component/UI/Container/Container";
import { assets } from "@/assets";
import BlogPage from "@/component/pages/BlogPage";

const Page = () => {
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Appointment booked successfully!", {
      position: "top-right",
    });

    setFormData({
      department: "",
      doctor: "",
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      note: "",
    });
  };

  return (
    <Container>
      <div className="bg-gray-50">
        <h1 className="text-3xl md:text-4xl font-semibold text-left text-[#3B585E] px-4 md:px-20 pt-8 md:pt-10">
          Appointment
        </h1>
        <div className="px-4 md:px-20">
          <Breadcrumb />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 px-4 md:px-12 py-8 bg-white max-w-6xl mx-auto">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full md:w-1/2 p-4 md:p-8 shadow-md rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Department */}
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Select Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full border bg-gray-50 border-gray-200 rounded-md px-4 py-2 text-sm"
              >
                <option value="">-- Choose Department --</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Medicine">Medicine</option>
              </select>
            </div>

            {/* Doctor */}
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Choose Doctor by Name
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                className="w-full border bg-gray-50 border-gray-200 rounded-md px-4 py-2 text-sm"
              >
                <option value="">-- Choose Doctor --</option>
                <option value="Naiden Smith">Naiden Smith</option>
                <option value="Sophia Lee">Sophia Lee</option>
                <option value="James Arthur">James Arthur</option>
              </select>
            </div>

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Patient Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="col-span-2 border bg-gray-50 border-gray-200 rounded-md px-4 py-2 text-sm"
            />

            {/* Phone & Email */}
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border bg-gray-50 border-gray-200 rounded-md px-4 py-2 text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border bg-gray-50 border-gray-200 rounded-md px-4 py-2 text-sm"
              />
            </div>

            {/* Date & Time */}
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border bg-gray-50 border-gray-200 rounded-md px-4 py-2 text-sm"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border bg-gray-50 border-gray-200 rounded-md px-4 py-2 text-sm"
              />
            </div>

            {/* Note */}
            <textarea
              name="note"
              placeholder="Type Appointment Note"
              value={formData.note}
              onChange={handleChange}
              className="col-span-2 border bg-gray-50 border-gray-200 rounded-md px-4 py-2 text-sm min-h-[100px]"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={assets.doctor.doctor}
            alt="Doctor"
            className="w-full max-w-[300px] md:max-w-[350px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />

      <div className="px-4 md:px-20">
        <BlogPage />
      </div>
    </Container>
  );
};

export default Page;
