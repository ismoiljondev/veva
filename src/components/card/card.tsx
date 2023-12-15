import Image from "next/image";
import React from "react";

type cardProps = {
  image: any;
  text: string;
  litr: string;
  sum: string;
  cost: number;
};

const Card: React.FC<cardProps> = ({
  image,
  text,
  litr,
  sum,
  cost,
}: cardProps) => {
  return (
    <div className="flex flex-col gap-[15px] p-[20px] hover:bg-white hover:shadow-[0px_20px_20px_0px_rgba(0,0,0,0.20)] w-[300px] rounded-[10px] group relative z-10">
      <div className="flex justify-center bg-blend-darken">
        <Image src={image} alt="image" />
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col text-center">
          <p className="text-sm ">{text}</p>
          <h2 className="text-2xl font-bold">{litr}</h2>
        </div>
        <div className="hidden items-center justify-between group-hover:flex">
          <button>1</button>
          <div className="flex-col">
            <p className="text-xs">{sum}</p>
            <p className="text-2xl font-bold text-[#1CBBEE]">{cost} сум</p>
          </div>
        </div>
        <button className="hidden bg-[#000] rounded-full py-[12px] px-[16px] text-white group-hover:block">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default Card;
