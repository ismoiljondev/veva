import React from "react";

import Image from "next/image";
import water from "@/images/gift.png";
import gif from "@/images/gif.gif";
const Water: React.FC = () => {
  return (
    <div className="flex flex-col gap-3.5 h-[390px] w-400px max-lg:hidden bg-black relative">
      <div className="h-full bg-white w-full">
        <Image src={gif} alt="gif" className="h-full w-[250px] m-auto" />
        <Image
          src={water}
          alt="aaa"
          className="absolute top-0 right-0 left-0 z-10 h-[395px] w-[300px]"
        />
      </div>
    </div>
  );
};

export default Water;
