interface MenuCrewProps {
  setItem: (item: number) => void;
  item: number;
}

export const MenuCrew = ({ setItem, item }: MenuCrewProps) => {

  return (
    <div className="flex gap-6">
      <button
        onClick={() => setItem(0)}
        className={` bg-white rounded-full w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] ${
          item == 0 ? "opacity-1" : "opacity-[0.5]"
        }`}
      ></button>
      <button
        onClick={() => setItem(1)}
        className={` bg-white rounded-full w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] ${
          item == 1 ? "opacity-1" : "opacity-[0.5]"
        }`}
      ></button>
      <button
        onClick={() => setItem(2)}
        className={` bg-white rounded-full w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] ${
          item == 2 ? "opacity-1" : "opacity-[0.5]"
        }`}
      ></button>
      <button
        onClick={() => setItem(3)}
        className={` bg-white rounded-full w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] ${
          item == 3 ? "opacity-1" : "opacity-[0.5]"
        }`}
      ></button>
    </div>
  );
};
