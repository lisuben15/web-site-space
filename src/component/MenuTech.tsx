interface MenuTechProps {
  setItem: (item: number) => void;
  item: number;
}

export const MenuTech = ({ setItem, item }: MenuTechProps) => {
  return (
    <div className="flex justify-center lg-custom:flex-col flex-row gap-4 lg-custom:gap-8">
      <button
        onClick={() => setItem(0)}
        className={`border rounded-full text-[18px] md:text-[24px] lg-custom:text-[32px] lg-custom:w-[80px] lg-custom:h-[80px] md:w-[56px] md:h-[56px] w-[40px] h-[40px] ${
          item == 0 ? "bg-white text-black" : "opacity-1"
        }`}
      >
        1
      </button>
      <button
        onClick={() => setItem(1)}
        className={`border rounded-full text-[18px] md:text-[24px] lg-custom:text-[32px] lg-custom:w-[80px] lg-custom:h-[80px] md:w-[56px] md:h-[56px] w-[40px] h-[40px]${
          item == 1 ? " bg-white text-black" : "opacity-1"
        }`}
      >
        2
      </button>
      <button
        onClick={() => setItem(2)}
        className={` border rounded-full text-[18px] md:text-[24px] lg-custom:text-[32px] lg-custom:w-[80px] lg-custom:h-[80px] md:w-[56px] md:h-[56px] w-[40px] h-[40px] ${
          item == 2 ? "bg-white text-black" : "opacity-1"
        }`}
      >
        3
      </button>
    </div>
  );
};
