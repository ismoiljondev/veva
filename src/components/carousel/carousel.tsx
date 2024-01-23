import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./style.modules.scss";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import React from "react";
import layer from "@/images/layer.png";
import VevaWater from "@/components/vevaWater/VevaWater";
import pompa from "@/images/pompa.png";
import Image from "next/image";
const SwiperTest: React.FC = (children: any) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={500}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 2,
          slideShadows: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper flex justify-between"
      >
        <SwiperSlide>
          <div className="w-auto">
            <VevaWater />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <Image src={layer} alt="layer" className="w-full h-full" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <Image src={pompa} alt="pompa" className="w-[300px] h-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperTest;
