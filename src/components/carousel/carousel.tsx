import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import React from "react";
import layer from "@/images/layer.png";
import VevaWater from "@/components/vevaWater/VevaWater";
import pompa from "@/images/pompa.png";
import Image from "next/image";
import Button from "../button/button";
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

.customclass img {
  display: block;
  width: 100%;
  height: 100%;
}
.swiper-slide-active {
  opacity: 1;
}
.swiper-slide-active img{
  width:100%
  heigth:100%
}
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right {

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
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper flex justify-between"
      >
        <SwiperSlide className="customclass w-11/12">
          <div className="mt-32 flex flex-col gap-4">
            <div className="h-3/4">
              <Image src={layer} alt="layer" width={150} height={100} />
            </div>
            <Button bgcolor="black" color="white">
              Заказать воду
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="customclass">
          <div className="flex flex-col">
            <div className="w-auto">
              <VevaWater />
            </div>
            <Button bgcolor="black" color="white">
              Заказать воду
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="customclass">
          <div className="flex flex-col gap-1 items-center">
            <div>
              <Image src={pompa} alt="pompa" className="w-[300px] h-full" />
            </div>
            <div>
              <Button auto="auto" bgcolor="black" color="white">
                Заказать воду
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperTest;
