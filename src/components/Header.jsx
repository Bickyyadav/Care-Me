import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* life side */}
      <div className="flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-5xl md:text-4xl lg:text-6xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight ">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-center items-start text-white justify-center gap-2">
          <img src={assets.group_profiles} alt="group profile" />
          <p className="mt-1">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality" className="flex flex-center  gap-4 bg-slate-100 px-8 py-3 rounded-lg text-gray-600 text-sm m-auto md:m-0 hover:scale-105  translate-all duration-300 ">
          Book appointment <img  className="mt-1.4"  src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* right side */}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="" />
      </div>
    </div>
  );    
};

export default Header;
