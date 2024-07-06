import Image from "next/image";
import downArrow from "@/public/down-arrow.svg";
import Search from "@/app/_components/Header/Search"

export default function Tools() {
  return (
    <div className="px-2 h-full flex gap-5 items-center ">
      <div className="w-full max-w-[320px] flex items-center">
        <Search />
      </div>
      <div className="flex items-center gap-2 text-white font-bold">
        <p>Ру</p>
        <Image
          src={downArrow}
          width={100}
          height={100}
          className="h-3 w-3"
          alt="Down Arrow"
        />
      </div>
    </div>
  );
}
