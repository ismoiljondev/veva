import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import "./style.css";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import React, { ReactNode } from "react";

export default function SwiperTest(children: any) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={200}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 2.5,
          slideShadows: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper flex justify-between"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {children}
      </Swiper>
    </>
  );
}
