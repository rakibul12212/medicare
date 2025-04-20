import { assets } from "@/assets";
import { FiCheck } from "react-icons/fi";

const categoryImages = {
  "Angiology Services": assets.doctor.doctor1,
  "Cardiology Services": assets.doctor.doctor2,
  "Dental Services": assets.doctor.doctor3,
  "Endocrinology Services": assets.doctor.doctor4,
  "Eye Care Services": assets.doctor.doctor5,
  "Neurology Services": assets.doctor.doctor6,
  "Orthopaedics Services": assets.doctor.doctor1,
  "ENT Services": assets.doctor.doctor3,
};

const categoryAdvantages = {
  "Angiology Services": [
    "Advanced vascular diagnostics",
    "Minimally invasive procedures",
    "Integrated cardiac care",
  ],
  "Cardiology Services": [
    "State-of-the-art cardiac labs",
    "24/7 emergency care",
    "Expert heart specialists",
  ],
  "Dental Services": [
    "Pain-free treatments",
    "Modern dental imaging",
    "Affordable orthodontics",
  ],
  "Endocrinology Services": [
    "Precise hormonal evaluations",
    "Thyroid and diabetes management",
    "Customized wellness programs",
  ],
  "Eye Care Services": [
    "Laser-assisted treatments",
    "Comprehensive vision exams",
    "Pediatric & adult eye care",
  ],
  "Neurology Services": [
    "Neuroimaging & EEG available",
    "Specialized stroke units",
    "Rehabilitation support",
  ],
  "Orthopaedics Services": [
    "Joint replacement expertise",
    "Advanced physiotherapy",
    "Fracture & trauma care",
  ],
  "ENT Services": [
    "Hearing aids & audiology",
    "Endoscopic sinus surgery",
    "Voice & speech therapy",
  ],
};

export default function ContentSection({ selectedCategory }) {
  const imageSrc =
    categoryImages[selectedCategory] || "/images/default-doctor.jpg";
  const advantages = categoryAdvantages[selectedCategory] || [];

  return (
    <div className=" space-y-6">
      <h2 className="text-2xl font-semibold text-blue-600">
        {selectedCategory}
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <img
          src={imageSrc}
          alt={selectedCategory}
          className="w-full md:w-5/12 h-[300px] md:h-[360px]  object-cover "
        />

        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Professional Medical Service of {selectedCategory.split(" ")[0]}
          </h3>
          <p className="text-gray-600">
            Medical services tailored to {selectedCategory}. Our team ensures
            top-notch treatment and patient care.
          </p>

          {/* Features List */}
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Experienced doctors and staff",
              "Modern medical infrastructure",
              "Patient-focused approach",
              "Affordable and accessible care",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FiCheck className="text-green-600 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          {/* Advantage Section */}
          {advantages.length > 0 && (
            <div className="pt-4 space-y-2">
              <h4 className="text-2xl font-semibold text-gray-800">
                Advantages of {selectedCategory}
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {advantages.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FiCheck className="text-green-600 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
