import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import React from "react";
import layer from "@/images/layer.png";
import VevaWater from "@/components/vevaWater/VevaWater";
import pompa from "@/images/pompa.png";
import Image from "next/image";
const SwiperTest: React.FC = () => {
  const css = `
  .swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.customclass {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 540px;
  opacity: 0.45;
  background: none;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}
.swiper-slide-active {
  opacity: 1;
}
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right {
  transform: scale(0.1);
  background-image: none;
}

  `;
  return (
    <>
      <style>{css}</style>
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
        <SwiperSlide className="customclass">
          <div className="w-auto">
            <VevaWater />
          </div>
        </SwiperSlide>
        <SwiperSlide className="customclass">
          <div className="w-full h-full">
            <Image src={layer} alt="layer" className="w-full h-full" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="customclass">
          <div>
            <Image src={pompa} alt="pompa" className="w-[300px] h-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperTest;
