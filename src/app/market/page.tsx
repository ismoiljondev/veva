"use client";
import Card from "@/components/card/card";
import Container from "@/components/container/container";
import React, { useState } from "react";
import water from "@/images/water.svg";
import Info from "@/components/info/info";
import VevaWater from "@/components/vevaWater/VevaWater";
const MarketPage: React.FC = () => {
  const [item, setItem] = useState(1);

  function setToggle(id: number) {
    setItem(id);
  }
  return (
    <>
      <Container>
        <div className="flex flex-col gap-[30px] flex-grow-1">
          <h1 className="text-3xl font-bold">Магазин товаров</h1>
          <div className="flex flex-col gap-[30px]">
            <div className="flex border-[#98A2B3] border-b max-sm:flex-col">
              <button
                className={`px-[24px] py-[14px] ${
                  item === 1
                    ? "text-black bg-[#F2F4F7] font-bold backdrop-blur-none"
                    : "text-[#98A2B3]"
                } rounded-t-[10px]`}
                onClick={() => setToggle(1)}
              >
                Home
              </button>
              <button
                className={`px-[24px] py-[14px] ${
                  item === 2
                    ? "text-black bg-[#F2F4F7] font-bold backdrop-blur-none"
                    : "text-[#98A2B3]"
                } rounded-t-[10px]`}
                onClick={() => setToggle(2)}
              >
                Pompa
              </button>
              <button
                className={`px-[24px] py-[14px] ${
                  item === 3
                    ? "text-black bg-[#F2F4F7] font-bold backdrop-blur-none"
                    : "text-[#98A2B3]"
                } rounded-t-[10px]`}
                onClick={() => setToggle(3)}
              >
                Filter
              </button>
            </div>
            <div className={item === 1 ? "block" : "hidden"}>
              <Card
                image={water}
                text={"Вода в бутилированной бутылке"}
                litr={"18,9 л."}
                sum={"Итоговая стоимость:"}
                cost={0}
              />
            </div>
            <div className={item === 2 ? "block" : "hidden"}>
              <VevaWater />
            </div>
            <div className={item === 3 ? "block" : "hidden"}>item3</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MarketPage;
