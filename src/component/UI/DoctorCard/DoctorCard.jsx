import Image from "next/image";

const DoctorCard = ({ img, name, designation, socials }) => {
  return (
    <div className="relative group overflow-hidden bg-white ">
      
      <div className="relative w-full h-96 2xl:h-[400px]">
        <Image src={img} alt={name} fill />
      </div>

      {/* Social Icons*/}
      <div className="absolute top-5 right-5 flex flex-col gap-3 translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition"
          >
            <social.icon size={16} />
          </a>
        ))}
      </div>

      
      <div className=" relative bottom-10  text-center mx-5 py-3 px-4 bg-white shadow-md">
        <h3 className="text-lg font-semibold text-black">{name}</h3>
        <p className="text-blue-500 uppercase text-sm font-medium mt-1">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
