import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat 
                 bg-[url('/assets/home/background-home-mobile.jpg')] 
                 md:bg-[url('/assets/home/background-home-tablet.jpg')] 
                 lg:bg-[url('/assets/home/background-home-desktop.jpg')]"
    >
      <div className="relative flex flex-col lg:flex-row min-h-screen text-white justify-center gap-12 lg:gap-8 lg:items-end items-center pt-[180px] md:pt-[280px] pb-32  px-20 md:px-24 lg:px-40 ">
        <div className="flex flex-1 flex-col gap-6 justify-center items-center lg:justify-start lg:items-start">
          <div className="flex flex-col px-6 md:px-0 gap-6">
            <span className="text-[16px] md:text-[28px] leading-none text-center lg:text-start font-barlowCondensed tracking-widest font-thin">
              SO, YOU WANT TO TRAVEL TO
            </span>
            <span className="text-[80px] md:text-[144px] leading-none animation">
              SPACE
            </span>
          </div>

          <p className="text-[15px] md:text-[16px] lg:text-[18px] text-center lg:text-left lg:min-w-[540px] md:max-w-[512px] max-w-[327px] font-barlow text-[#D0D6F9] font-normal">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex-1 flex justify-end">                
          <Link
              to={"/destination"}
              className= "planet-container  w-[144px] h-[144px] md:w-[272px] md:h-[272px] text-[18px] md:text-[32px] rounded-full  bg-black transition-all duration-200 ease-in-out z-9 overflow-hidden ">
              <span className="flex justify-center items-center w-full" >EXPLORE</span>             
            </Link>    
        </div>
      </div>
    </div>
  );
};
