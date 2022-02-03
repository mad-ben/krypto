import logo from "../../images/logo4.png";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4  gradient-bg-services2">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32"></img>
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-cyan-300 text-base text-center mx-2 cursor-pointer">
            Market
          </p>
          <p className="text-cyan-300 text-base text-center mx-2 cursor-pointer">
            Exchange
          </p>
          <p className="text-cyan-300 text-base text-center mx-2 cursor-pointer">
            FAQ
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-cyan-300 text-sm text-center ">
          Demonstration Project
        </p>
        <p className="text-cyan-300 text-sm text-center ">Andriy Kalysh</p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-cyan-300 mt-5"></div>
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-cyan-300 text-sm text-center ">2022</p>
        <p className="text-cyan-300 text-sm text-center ">GPL-3.0</p>
      </div>
    </div>
  );
};

export default Footer;