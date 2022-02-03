import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-cyan-300 text-lg">{title}</h3>
      <p className="mt-2 text-cyan-300 text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services2">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-cyan-300 sm:text-3xl py-2">
            Roadmap <br />
            ways we continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security"
          icon={<BsShieldFillCheck fontSize={21} className="text-cyan-300" />}
          subtitle="Security is guaranteed"
        />
        <ServiceCard
          color="bg-[#496213]"
          title="Time"
          icon={<BiSearchAlt fontSize={21} className="text-cyan-300" />}
          subtitle="Optimizing transaction times"
        />
        <ServiceCard
          color="bg-[#3252C3]"
          title="Fees"
          icon={<RiHeart2Fill fontSize={21} className="text-cyan-300" />}
          subtitle="Lowest and most optimized fees"
        />
      </div>
    </div>
  );
};

export default Services;
