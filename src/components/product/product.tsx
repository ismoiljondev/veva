"use client";
import Image from "next/image";
import React, { useState } from "react";
import water from "@/images/water.svg";
import left from "@/images/left.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import cars from "@/images/cars.svg";
import right from "@/images/right.png";
const Product: React.FC = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="flex justify-between gap-10 max-xl:flex-col max-xl:items-center max-xl:justify-center">
      <div className="flex flex-col gap-[30px] max-lg:m-auto">
        <h2 className="text-3xl font-bold">Моя корзина</h2>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center  bg-[#F2F4F7] py-[10px] rounded-[20px] pr-40 max-sm:flex-col max-sm:p-4">
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
                <div className="flex flex-col max-lg:hidden">
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
          <div className="flex flex-col gap-[15px] border-dotted-[1px]-[#98A2B3]">
            <div className="grid grid-cols-2 gap-7 ">
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
                  Номер телефона для связи:
                </p>
                <div className="bg-[#F2F4F7] p-[14px] rounded-[10px]">
                  + 998 90 124-25-25
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[2fr_1fr_2fr] gap-7 max-lg:grid-cols-1">
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
          <div className="flex justify-between items-end gap-4 max-lg:flex-col max-lg:gap-5">
            <div className="flex flex-col">
              <p className="text-[#98A2B3] text-[14px] font-light">К оплате:</p>
              <p className="text-2xl font-bold text-[#1CBBEE]">
                {count * 15000} сум
              </p>
            </div>
            <div className="w-full">
              <button className="w-full px-[38px] py-3 leading-7 rounded-full bg-black text-white hover:shadow-[0_20px_20px_0_rgba(0,0,0,0.20)]">
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-[450px] max-sm:w-[400px]"
        >
          <SwiperSlide>
            <div className="flex p-8 bg-[#0075CA] justify-between pr-0 rounded-[40px] relative">
              <div className="flex flex-col gap-16 justify-between w-[50%]">
                <h1 className="text-2xl text-white">
                  Круглосуточная доставка{" "}
                  <span className="font-bold">24/7</span>
                </h1>
                <button className="px-[38px] py-[12px] bg-white rounded-full text-[14px] [[font-size:_clamp(2em,5vw,10em)]]">
                  Узнать больше
                </button>
              </div>
              <div className="w-[220px] h-[170px] absolute bottom-0 right-0">
                <Image src={cars} alt="cars" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex p-8 bg-[#0075CA] justify-between pr-0 rounded-[40px] relative">
              <div className="flex flex-col gap-16 justify-between w-[50%]">
                <h1 className="text-2xl text-white">
                  Круглосуточная доставка{" "}
                  <span className="font-bold">24/7</span>
                </h1>
                <button className="px-[38px] py-[12px] bg-white rounded-full text-[14px] [[font-size:_clamp(2em,5vw,10em)]]">
                  Узнать больше
                </button>
              </div>
              <div className="w-[220px] h-[170px] absolute bottom-0 right-0">
                <Image src={cars} alt="cars" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex p-8 bg-[#0075CA] justify-between pr-0 rounded-[40px] relative">
              <div className="flex flex-col gap-16 justify-between w-[50%]">
                <h1 className="text-2xl text-white">
                  Круглосуточная доставка{" "}
                  <span className="font-bold">24/7</span>
                </h1>
                <button className="px-[38px] py-[12px] bg-white rounded-full text-[14px] [[font-size:_clamp(2em,5vw,10em)]]">
                  Узнать больше
                </button>
              </div>
              <div className="w-[220px] h-[170px] absolute bottom-0 right-0">
                <Image src={cars} alt="cars" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
