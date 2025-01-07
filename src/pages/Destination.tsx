import { useEffect, useState } from "react";
import { MenuItems } from "../component/MenuItems";

export const Destination = () => {
  const [data, setData] = useState<SpaceData | null>(null);
  const [item, setItem] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        setData(await response.json());
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="relative overflow-hidden min-h-screen">
        <picture className="absolute inset-0 w-full  min-h-screen -z-10">
          <source
            srcSet="/assets/destination/background-destination-mobile.jpg"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/assets/destination/background-destination-tablet.jpg"
            media="(max-width: 1024px)"
          />
          <img
            src="/assets/destination/background-destination-desktop.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </picture>
        {data &&
          data.destinations?.map((destination, index) => (
            <div
              className={`flex flex-col min-h-screen text-white justify-center gap-6 px-12  lg:px-[165px] pt-[180px] ${
                index == item ? "" : "hidden"
              }`}
            >
              <div className="flex w-full md:justify-start justify-center items-center">
                <span className="text-[16px] md:text-[20px] lg:text-[28px]  font-barlowCondensed tracking-[0.2em]">
                  <span className="opacity-[0.4]">01</span> PICK YOUR
                  DESTINATION
                </span>
              </div>

              <div className="flex flex-col lg:flex-row h-full justify-center items-center gap-8 md:gap-20 py-[15px] md:py-[70px] lg:py-[100px]">
                <div className="flex-1 flex justify-center items-center lg:min-w-[350px] lg:h-[539px] md:w-[350px] md:h-[350px] w-[180px] h-[180px]  ">
                  <img src={destination.images.webp} alt="destination" />
                </div>
                <div className="flex-1 flex flex-col gap-6 lg:gap-10 lg:justify-center items-center  text-center lg:text-left">
                  <div className=" lg:max-w-[445px] md:max-w-[512px] max-w-[327px] w-full ">
                    <MenuItems setItem={setItem} item={item}></MenuItems>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[56px] md:text-[80px] lg:text-[96px] leading-none uppercase">
                      {destination.name}
                    </h2>
                    <p className="text-[15px] md:text-[16px] lg:text-[18px]  lg:w-[445px] md:max-w-[512px] max-w-[327px]    lg:pb-2 font-barlow text-[#D0D6F9]">
                      {destination.description}
                    </p>
                  </div>
                  <div>
                    <img src="/Line.png" alt="" />
                  </div>
                  <div className="flex md:flex-row flex-col w-full lg:w-[445px]  gap-4 lg:gap-0 justify-center lg:justify-start">
                    <div className="flex flex-col gap-3 w-full">
                      <span className="text-[14px] font-barlowCondensed font-normal tracking-[0.2em] text-[#D0D6F9]">
                        AVG. DISTANCE
                      </span>
                      <span className="text-[28px] uppercase">
                        {destination.distance}
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                      <span className="text-[14px] font-barlowCondensed font-normal tracking-[0.2em] text-[#D0D6F9]">
                        EST. TRAVEL TIME
                      </span>
                      <span className="text-[28px] uppercase">
                        {destination.travel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
