import { useEffect, useState } from "react";
import { MenuTech } from "../component/MenuTech";

export const Technology = () => {
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
          srcSet="/assets/technology/background-technology-mobile.jpg"
          media="(max-width: 768px)"
        />
        <source
          srcSet="/assets/technology/background-technology-tablet.jpg"
          media="(max-width: 1024px)"
        />
        <img
          src="/assets/technology/background-technology-desktop.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </picture>

      {data &&
        data.technology?.map((technology, index) => (
          <div
            className={`flex flex-col pt-[180px] h-full text-white gap-6 px-10 lg-custom:pl-[165px] lg-custom:px-0   ${
              index == item ? "" : "hidden"
            }`}
          >
            <div className="flex w-full md:justify-start justify-center items-center">
              <span className="text-[16px] md:text-[20px] lg-custom:text-[28px]  font-barlowCondensed tracking-[0.2em]">
                <span className="opacity-[0.4] font-bold">03</span> SPACE LAUNCH
                101
              </span>
            </div>

            <div className="flex flex-col-reverse lg-custom:flex-row h-full justify-center items-center gap-6 md:gap-0 px-14 pt-20 lg-custom:pt-0  md:px-20">
              <div className="flex-1 flex lg-custom:flex-row flex-col lg-custom:gap-16 gap-10 py-[40px]">
                <MenuTech setItem={setItem} item={item}></MenuTech>
                <div className=" flex flex-col gap-10 lg-custom:justify-start items-center lg-custom:items-start text-center lg-custom:text-left">
                  <div className="flex flex-col gap-6">
                    <p className="text-[18px] md:text-[24px] lg-custom:text-[32px] opacity-[0.5] ">
                      THE TERMINOLOGY...
                    </p>
                    <h2 className="text-[24px] md:text-[40px] lg-custom:text-[56px] leading-none uppercase">
                      {technology.name}
                    </h2>
                  </div>

                  <p className="text-[15px] md:text-[16px] lg-custom:text-[18px] lg-custom:text-left text-center lg-custom:max-w-[491px] md:w-[512px] w-[327px] font-barlow text-[#D0D6F9]">
                    {technology.description}
                  </p>
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center lg-custom:min-w-[550px] lg-custom:h-[700px] md:w-[768px] md:h-[778px] w-[373px] h-[376px] z-30 lg-custom:py-10">
                <img src={technology.images.portrait} alt="destination" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
