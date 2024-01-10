import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import cars from "@/images/cars.svg";
const Swipers: React.FC = () => {
  return (
    <>
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
                Круглосуточная доставка <span className="font-bold">24/7</span>
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
                Круглосуточная доставка <span className="font-bold">24/7</span>
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
                Круглосуточная доставка <span className="font-bold">24/7</span>
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
    </>
  );
};

export default Swipers;
