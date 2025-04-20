import Breadcrumb from "@/component/UI/Breadcrumb";
import ContactForm from "@/component/UI/ContactForm";
import Container from "@/component/UI/Container/Container";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const page = () => {
  return (
    <Container>
      {/* Heading & Breadcrumb */}
      <div className="bg-gray-50">
        <h1 className="text-4xl font-semibold text-left text-[#3B585E] px-5 md:px-20 pt-10">
          Contact
        </h1>
        <div className="px-5 md:px-20">
          <Breadcrumb />
        </div>
      </div>

      <section className="bg-white px-4 py-12">
        {/* Contact Info */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-100 p-6 text-center ">
            <FaMapMarkerAlt className="text-2xl text-blue-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">Our Location</h3>
            <p>The Queen’s Walk, Bishop’s, London SE1 7PB, United Kingdom</p>
          </div>
          <div className="bg-gray-100 p-6 text-center ">
            <FaPhoneAlt className="text-2xl text-blue-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">Our Contact</h3>
            <p>+ (987) 123-4567-8900</p>
            <p>+ (987) 123-4567-8901</p>
          </div>
          <div className="bg-gray-100 p-6 text-center ">
            <FaEnvelope className="text-2xl text-blue-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">Mail Us</h3>
            <p>info@peacefulthemes.com</p>
            <p>info2@peacefulthemes.com</p>
          </div>
        </div>

        {/* Contact Form Component */}
        <ContactForm />

        {/* Map Section */}
        <div className="mt-12 w-full">
          <iframe
            className="w-full h-[400px] border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19802.218219716106!2d-0.1277583083711194!3d51.50329761479379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b3f2e5dbb9%3A0xd9a8a8aa2321f2!2sLondon%20SE1%207PB%2C%20UK!5e0!3m2!1sen!2sus!4v1618359238465!5m2!1sen!2sus"
          ></iframe>
        </div>
      </section>
    </Container>
  );
};

export default page;
