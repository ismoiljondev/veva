"use client";
import Container from "@/components/container/container";
import React, { useState } from "react";
import Product from "@/components/product/product";
import Table from "@/components/table/table";
const MarketPage: React.FC = () => {
  const [item, setItem] = useState(1);
  function setToggle(id: number) {
    setItem(id);
  }
  return (
    <>
      <Container>
        <div className="flex flex-col gap-[30px] mt-16 mb-[80px]">
          <h1 className="text-3xl font-bold">Магазин товаров</h1>
          <div className="flex flex-col gap-[30px]">
            <div className="flex border-[#98A2B3] border-b">
              <button
                className="px-[24px] py-[14px] focus:bg-[#F2F4F7] rounded-t-[10px] focus:font-bold"
                onClick={() => setToggle(1)}
              >
                Ваша корзина
              </button>
              <button
                className="py-[14px] px-[24px] focus:bg-[#F2F4F7] rounded-t-[10px] focus:font-bold"
                onClick={() => setToggle(2)}
              >
                История заказов
              </button>
              <button
                className="py-[14px] px-[24px] focus:bg-[#F2F4F7] rounded-t-[10px] focus:font-bold"
                onClick={() => setToggle(3)}
              >
                Личная
              </button>
              <button
                className="py-[14px] px-[24px] focus:bg-[#F2F4F7] rounded-t-[10px] focus:font-bold"
                onClick={() => setToggle(4)}
              >
                Оповещения
              </button>
            </div>
            <div className={item === 1 ? "flex justify-between" : "hidden"}>
              <Product />
            </div>
            <div className={item === 2 ? "block" : "hidden"}>
              <Table />
            </div>
            <div className={item === 3 ? "block" : "hidden"}>item3</div>
            <div className={item === 4 ? "block" : "hidden"}>item4</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MarketPage;
