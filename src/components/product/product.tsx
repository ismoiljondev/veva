"use client";
import Image from "next/image";
import React, { useState } from "react";
import water from "@/images/water.svg";
import left from "@/images/left.png";
import right from "@/images/right.png";
const Product: React.FC = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-[30px]">
        <h2 className="text-3xl font-bold">Моя корзина</h2>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center  bg-[#F2F4F7] py-[10px] rounded-[20px] pr-40">
            <div className="px-[45px]">
              <Image src={water} alt="water" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-2xl font-light">
                Вода в бутилированной бутылке
              </p>
              <div className="flex gap-10">
                <div className="flex gap-[10px] rounded-[10px] bg-white p-[14px]">
                  <button onClick={() => setCount((prev) => prev - 1)}>
                    <Image src={left} alt="left" />
                  </button>
                  <p>{count}</p>
                  <button onClick={() => setCount((prev) => prev + 1)}>
                    <Image src={right} alt="right" />
                  </button>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#98A2B3] text-[14px] font-light">
                    Стоимость за 1 единицу:
                  </p>
                  <p className="text-18px">15 000 сум</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#98A2B3] text-[14px] font-light">
                    Итоговая стоимость:
                  </p>
                  <p className="text-18px font-bold text-[#1CBBEE]">
                    {count * 15000} сум
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="grid grid-cols-[2fr_1fr_2fr] gap-[28px]">
              <div className="flex flex-col">
                <p className="text-[#98A2B3] text-[14px] font-light">
                  Адрес доставки:
                </p>
                <div className="bg-[#F2F4F7] p-[14px] rounded-[10px]">
                  г. Ташкент, улица Мукими, 166
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#98A2B3] text-[14px] font-light">
                  Номер подъезда:
                </p>
                <div className="bg-[#F2F4F7] p-[14px] rounded-[10px]">12</div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#98A2B3] text-[14px] font-light">
                  Номер телефона для связи:
                </p>
                <div className="bg-[#F2F4F7] p-[14px] rounded-[10px]">
                  + 998 90 124-25-25
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
