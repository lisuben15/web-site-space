import { useEffect, useState } from "react";

import { MenuCrew } from "../component/MenuCrew";

export const Crew = () => {
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
    <div className="relative overflow-hidden min-h-screen">
      <picture className="absolute inset-0 w-full  min-h-screen -z-10">
        <source
          srcSet="/assets/crew/background-crew-mobile.jpg"
          media="(max-width: 768px)"
        />
        <source
          srcSet="/assets/crew/background-crew-tablet.jpg"
          media="(max-width: 1024px)"
        />
        <img
          src="/assets/crew/background-crew-desktop.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </picture>

      {data &&
        data.crew?.map((crew, index) => (
          <div
            className={`flex flex-col min-h-screen justify-center text-white gap-6 px-12 lg:px-[165px] pt-[180px]  ${
              index == item ? "" : "hidden"
            }`}
          >
            <div className="flex w-full md:justify-start justify-center items-center">
              <span className="text-[16px] md:text-[20px] lg:text-[28px]  font-barlowCondensed tracking-[0.2em]">
                <span className="opacity-[0.4]">02</span> MEET YOUR CREW
              </span>
            </div>

            <div className="flex flex-col lg:flex-row h-full justify-center items-center gap-8 md:gap-20 py-[50px] md:pt-[70px] lg:py-[133px]">
              <div className="relative flex-1 flex flex-col gap-6 lg:gap-10">
                <div className="flex flex-col gap-6 lg:justify-start items-center lg:items-start text-center lg:text-left">
                  <div className="w-full flex flex-col gap-2 md:gap-4">
                    <p className="text-[18px] md:text-[24px] lg:text-[32px] uppercase opacity-[0.5]">
                      {crew.role}
                    </p>
                    <h2 className="text-[24px] md:text-[40px] lg:text-[56px] lg:w-[539px] md:w-[512px] w-[327px] leading-none uppercase">
                      {crew.name}
                    </h2>
                  </div>
                  <p className=" text-[15px] md:text-[16px] lg:text-[18px] lg:max-w-[539px] md:w-[512px] w-[327px]  pb-24  md:pb-32 font-barlow text-[#D0D6F9]">
                    {crew.bio}
                  </p>
                </div>
                <div className="absolute top-[260px] md:top-[290px] lg:top-[500px] lg:left-0 lg:-translate-x-0 left-1/2 -translate-x-1/2">
                  <MenuCrew setItem={setItem} item={item}></MenuCrew>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center lg:min-w-[350px] lg:h-[676px] md:w-[446.8px] md:h-[560px] w-[271.27px] h-[340px] ">
                <img src={crew.images.webp} alt="crew" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
