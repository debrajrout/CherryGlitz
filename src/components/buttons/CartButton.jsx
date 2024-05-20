import { GoHeart } from "react-icons/go";

export default function CartButton() {
  return (
    <div className="relative ">
      <div className="absolute -right-[7px] -top-[5px] flex h-4 w-5 flex-row  items-center justify-center rounded-full bg-pink-700 text-center ">
        <span className=" text-sm font-medium text-white">9</span>
      </div>
      <GoHeart className="h-7 w-7 text-white " />
    </div>
  );
}
