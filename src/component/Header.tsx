
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo1 } from "./icon/Logo1";
import { Logo2 } from "./icon/Logo2";

export const Header = () => {
  useNavigate();
  const [aPartirDeTablet, setAPartirDeTablet] = useState(
    window.innerWidth >= 640
  );
  const [barraLateral, setBarraLateral] = useState(false);

  const manejarBarraLateral = () => {
    setBarraLateral(!barraLateral);
  };

  useEffect(() => {
    const cambiarTamaño = () => {
      setAPartirDeTablet(window.innerWidth >= 768);
    };

    window.addEventListener("resize", cambiarTamaño);
    return () => window.removeEventListener("resize", cambiarTamaño);
  }, []);

  return (
    <div className="flex justify-between place-items-end fixed top-0 left-0 w-full h-[136px] font-barlowCondensed bg-opacity-50 tracking-[0.2em] z-40">
      <div className="pb-5 flex-1 absolute">
        <Logo1></Logo1>
        <div className="pl-10">
          <Logo2></Logo2>
        </div>
      </div>
      <div className="flex flex-1 justify-end ">
        {aPartirDeTablet ? (
          <div className="flex justify-end lg:text-[16px] pr-5 md:pr-10 lg:pr-16 pl-14 md:pl-24 lg:pl-40 gap-8 md:gap-10 lg:gap-12 h-[96px] bg-gray-800  text-white bg-opacity-70 bg-white/5 backdrop-blur-[40px]">
            <Link
              to={"/"}
              className={`${
                location.pathname === "/"
                  ? "border-b-4 flex gap-2 items-center border-white"
                  : "flex gap-2 items-center"
              }`}
            >
              <span className="font-bold">00</span> HOME
            </Link>
            <Link
              to={"/destination"}
              className={` ${
                location.pathname === "/destination"
                  ? "border-b-4 border-white flex gap-2 items-center"
                  : "flex gap-2 items-center"
              }`}
            >
              <span className="font-bold">01</span> DESTINATION
            </Link>
            <Link
              to={"/crew"}
              className={`${
                location.pathname === "/crew"
                  ? "border-b-4 border-white flex gap-2 items-center"
                  : "flex gap-2 items-center"
              }`}
            >
              <span className="font-bold">02</span> CREW
            </Link>
            <Link
              to={"/technology"}
              className={`${
                location.pathname === "/technology"
                  ? "border-b-4 border-white flex gap-2 items-center"
                  : "flex gap-2 items-center"
              }`}
            >
              <span className="font-bold">03</span> TECHNOLOGY
            </Link>
          </div>
        ) : (
          <div className="flex p-9 font-barlowCondensed text-base tracking-[0.2em]">
            <button
              onClick={manejarBarraLateral}
              className="flex flex-col gap-1"
            >
              <img src="./Shape1.png" alt="sin-imagen" />
              <img src="./Shape1.png" alt="sin-imagen" />
              <img src="./Shape1.png" alt="sin-imagen" />
            </button>
            <div
              className={`fixed top-0 right-0 w-[60%] h-full bg-gray-800 backdrop-blur-lg bg-opacity-70 text-white transform ${
                barraLateral ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out`}
            >
              <button
                className="absolute top-20 pr-6 right-4 text-white"
                onClick={manejarBarraLateral}
              >
                <div>
                  <svg
                    className="absolute"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2.5752"
                      y="0.954102"
                      width="24"
                      height="3"
                      transform="rotate(45 2.5752 0.954102)"
                      fill="#D0D6F9"
                    />
                  </svg>
                  <div>
                    <svg
                      className="relative"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.454102"
                        y="17.9246"
                        width="24"
                        height="3"
                        transform="rotate(-45 0.454102 17.9246)"
                        fill="#D0D6F9"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <div className="flex flex-col items-start gap-8 pt-40 pl-8">
                <Link
                  to={"/"}
                  className={`${
                    location.pathname === "/"
                      ? "border-r-4 w-full text-left font-barlow border-white"
                      : ""
                  }`}
                >
                  <span className="font-bold">00</span> HOME
                </Link>
                <Link
                  to={"/destination"}
                  className={` ${
                    location.pathname === "/destination"
                      ? "border-r-4 w-full text-left font-barlow border-white"
                      : ""
                  }`}
                >
                  <span className="font-bold">01</span> DESTINATION
                </Link>
                <Link
                  to={"/crew"}
                  className={`${
                    location.pathname === "/crew"
                      ? "border-r-4 w-full text-left font-barlow border-white"
                      : ""
                  }`}
                >
                  <span className="font-bold">02</span> CREW
                </Link>
                <Link
                  to={"/technology"}
                  className={`${
                    location.pathname === "/technology"
                      ? "border-r-4 w-full text-left font-barlow border-white"
                      : ""
                  }`}
                >
                  <span className="font-bold">03</span> TECHNOLOGY
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
