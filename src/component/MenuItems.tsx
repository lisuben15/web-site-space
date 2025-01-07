
interface MenuItemsProps {
  setItem: (item: number) => void;
  item: number;
}

export const MenuItems = ({ setItem, item}: MenuItemsProps) => {
  return (
    <div className="flex gap-8 w-full lg:justify-start justify-center">
      <button
        onClick={() => setItem(0)}
        className={` font-barlowCondensed font-normal pb-[13px]  tracking-[0.2em] ${item == 0 ? "border-b-4 text-white" : "text-[#D0D6F9]"}`}
      >
        MOON
      </button>
      <button
        onClick={() => setItem(1)}
        className={` font-barlowCondensed font-normal pb-[13px] tracking-[0.2em] ${item == 1 ? "border-b-4 text-white" : "text-[#D0D6F9]"}`}
      >
        MARS
      </button>
      <button
        onClick={() => setItem(2)}
        className={` font-barlowCondensed font-normal pb-[13px] tracking-[0.2em] ${item == 2 ? "border-b-4 text-white" : "text-[#D0D6F9]"}`}
      >
        EUROPA
      </button>
      <button
        onClick={() => setItem(3)}
        className={` font-barlowCondensed font-normal pb-[13px] tracking-[0.2em] ${item == 3 ? "border-b-4 text-white" : "text-[#D0D6F9]"}`}
      >
        TITAN
      </button>
    </div>
  );
};
