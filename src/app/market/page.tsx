"use client";
import Card from "@/components/card/card";
import Container from "@/components/container/container";
import React, { useState } from "react";
import water from "@/images/water.png";
import Image from "next/image";
import navbar from "@/images/Vector.png";
const MarketPage: React.FC = () => {
  const [item, setItem] = useState(1);

  function setToggle(id: number) {
    setItem(id);
  }
  return (
    <>
      {/* <Image src={navbar} alt="some" className="fixed top-[80px]" /> */}
      <Container>
        <div className="flex flex-col gap-[30px] mt-5">
          <h1 className="text-3xl font-bold">Магазин товаров</h1>
          <div className="flex flex-col gap-[30px]">
            <div className="flex border-[#98A2B3] border-b">
              <button
                className="px-[24px] py-[14px] focus:bg-[#F2F4F7] rounded-t-[10px] focus:font-bold"
                onClick={() => setToggle(1)}
              >
                Home
              </button>
              <button
                className="py-[14px] px-[24px] focus:bg-[#F2F4F7] rounded-t-[10px] focus:font-bold"
                onClick={() => setToggle(2)}
              >
                Pompa
              </button>
              <button
                className="py-[14px] px-[24px] focus:bg-[#F2F4F7] rounded-t-[10px] focus:font-bold"
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
            <div className={item === 2 ? "block" : "hidden"}>item2</div>
            <div className={item === 3 ? "block" : "hidden"}>item3</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MarketPage;
