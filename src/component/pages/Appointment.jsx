"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    doctor: "",
    date: "",
  });

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add form validation here if needed

    // Display success toast
    toast.success("Appointment booked successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Reset form after submission (optional)
    setFormData({
      name: "",
      phone: "",
      email: "",
      doctor: "",
      date: "",
    });
  };

  return (
    <div>
      <div className="p-0 md:px-10">
        <p className="uppercase bg-blue-500 text-white inline-block px-4 py-2">
          Make Appointment
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-4 bg-[#14457B] px-2 py-4 md:p-10"
        >
          <input
            type="text"
            placeholder="Patient Name"
            className="basis-full sm:basis-[32%] h-12 px-4 bg-white border border-gray-300 rounded outline-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="basis-full sm:basis-[32%] h-12 px-4 bg-white border border-gray-300 rounded outline-none"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="basis-full sm:basis-[32%] h-12 px-4 bg-white border border-gray-300 rounded outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <select
            className="basis-full sm:basis-[32%] h-12 px-4 bg-white border border-gray-300 rounded outline-none"
            value={formData.doctor}
            onChange={(e) =>
              setFormData({ ...formData, doctor: e.target.value })
            }
            required
          >
            <option value="">Select Your Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Lee">Dr. Lee</option>
          </select>
          <input
            type="date"
            className="basis-full sm:basis-[32%] h-12 px-4 bg-white text-black border border-gray-300 rounded outline-none"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
          <button
            type="submit"
            className="basis-full sm:basis-[32%] h-12 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Make An Appointment
          </button>
        </form>
      </div>

      {/* Toastify Container */}
      <ToastContainer />
    </div>
  );
};

export default Appointment;
