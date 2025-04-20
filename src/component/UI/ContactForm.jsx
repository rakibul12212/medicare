"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);

      // Simulate API call
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl mt-10">
      <h2 className="text-3xl font-bold text-[#3B585E] mb-6 text-center">
        Get In Touch With Us
      </h2>

      {submitted && (
        <div className="bg-green-100 text-green-800 p-3  mb-6 text-sm text-center">
          ✅ Message sent successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* Name */}
        <div className="col-span-1">
          <input
            type="text"
            placeholder="Enter Your Name"
            className={`w-full px-4 py-3 border ${
              errors.name ? "border-red-500" : "border-gray-100"
            } bg-gray-100 focus:outline-none `}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="col-span-1">
          <input
            type="email"
            placeholder="Enter Your Email"
            className={`w-full px-4 py-3 border ${
              errors.email ? "border-red-500" : "border-gray-100"
            } bg-gray-100 focus:outline-none `}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="col-span-1">
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className={`w-full px-4 py-3 border ${
              errors.phone ? "border-red-500" : "border-gray-100"
            } bg-gray-100 focus:outline-none `}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Subject */}
        <div className="col-span-1">
          <input
            type="text"
            placeholder="Subject"
            className={`w-full px-4 py-3 border ${
              errors.subject ? "border-red-500" : "border-gray-100"
            } bg-gray-100 focus:outline-none `}
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Message - Full Width */}
        <div className="col-span-1 md:col-span-2">
          <textarea
            rows={5}
            placeholder="Write Your Message"
            className={`w-full px-4 py-3 border ${
              errors.message ? "border-red-500" : "border-gray-100"
            } bg-gray-100 focus:outline-none `}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="col-span-1 md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-3  hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
