"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import car from "@/images/car.svg";
import InfoModal from "../infoModal/infoModal";
const Swiperx: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="flex p-12 bg-[#0075CA] justify-between pr-0 rounded-[40px] relative">
            <div className="flex flex-col gap-16 justify-between items-start">
              <h1 className="text-[56px] text-white relative z-10">
                Круглосуточная <br /> доставка{" "}
                <span className="font-bold">24/7</span>
              </h1>
              <div>
                <button
                  onClick={() => setShow(true)}
                  className="px-[38px] py-[12px] bg-white rounded-full text-lg [[font-size:_clamp(2em,5vw,10em)]] max-[450px]:px-4 max-[450px]:py-2 relative z-10"
                >
                  Узнать больше
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 top-6">
              <Image src={car} alt="cars" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex p-12 bg-[#0075CA] justify-between pr-0 rounded-[40px] relative">
            <div className="flex flex-col gap-16 justify-between items-start">
              <h1 className="text-[56px] text-white relative z-10">
                Круглосуточная <br /> доставка{" "}
                <span className="font-bold">24/7</span>
              </h1>
              <div>
                <button
                  onClick={() => setShow(true)}
                  className="px-[38px] py-[12px] bg-white rounded-full text-lg [[font-size:_clamp(2em,5vw,10em)]] max-[450px]:px-4 max-[450px]:py-2 relative z-10"
                >
                  Узнать больше
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 top-6">
              <Image src={car} alt="cars" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex p-12 bg-[#0075CA] justify-between pr-0 rounded-[40px] relative">
            <div className="flex flex-col gap-16 justify-between items-start">
              <h1 className="text-[56px] text-white relative z-10">
                Круглосуточная <br /> доставка{" "}
                <span className="font-bold">24/7</span>
              </h1>
              <div>
                <button
                  onClick={() => setShow(true)}
                  className="px-[38px] py-[12px] bg-white rounded-full text-lg [[font-size:_clamp(2em,5vw,10em)]] max-[450px]:px-4 max-[450px]:py-2 relative z-10"
                >
                  Узнать больше
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 top-6">
              <Image src={car} alt="cars" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <InfoModal isVisible={show} onClose={() => setShow(false)} />
    </>
  );
};

export default Swiperx;
