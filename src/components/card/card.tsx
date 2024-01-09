"use client";
import Image from "next/image";
import React, { useState } from "react";
import left from "@/images/left.png";
import right from "@/images/right.png";
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
  const [count, setCount] = useState(1);
  return (
    <div className="flex flex-col gap-[15px] p-[20px] hover:bg-white hover:shadow-[0px_20px_20px_0px_rgba(0,0,0,0.20)] w-[300px] rounded-[10px] group relative z-10  bg-white mix-blend-luminosity  opacity-20 hover:opacity-100">
      <div className="flex justify-center">
        <Image
          src={image}
          alt="image"
          className="mix-blend-luminosity group-hover:mix-blend-normal"
        />
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col text-center ">
          <p className="text-sm ">{text}</p>
          <h2 className="text-2xl text-black font-bold">{litr}</h2>
        </div>
        <div className="hidden items-center justify-between group-hover:flex">
          <div className="flex gap-[10px] rounded-[10px] bg-[#F2F4F7] p-[14px]">
            <button onClick={() => setCount((prev) => prev - 1)}>
              <Image src={left} alt="left" />
            </button>
            <p>{count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>
              <Image src={right} alt="right" />
            </button>
          </div>
          <div className="flex-col">
            <p className="text-xs">{sum}</p>
            <p className="text-2xl font-bold text-[#1CBBEE]">
              {18000 * count} сум
            </p>
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
