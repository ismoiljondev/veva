import React from "react";
import top from "@/images/bottom.svg";
import bottom from "@/images/top.svg";
import Image from "next/image";
const Water: React.FC = () => {
  return (
    <div className="flex flex-col gap-3.5 w-[270px] h-[390px]">
      <div className="w-[270px]">
        <Image src={bottom} alt="bottom" className="w-full" />
      </div>
      <div className="w-[270px]">
        <Image src={top} alt="top" className="w-full" />
      </div>
    </div>
  );
};

export default Water;
