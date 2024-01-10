"use client";
import Container from "@/components/container/container";
import React, { useState } from "react";
import Product from "@/components/product/product";
import Table from "@/components/table/table";
import Swipers from "@/components/swiper/swiper";
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
            <div className={item === 3 ? "flex flex-col gap-12" : "hidden"}>
              <div className="flex justify-between w-full gap-10 max-xl:flex-col">
                <div className="flex flex-col gap-12">
                  <h1>Личная информация</h1>
                  <table className="w-full">
                    <tr className="odd:bg-[#F2F4F7] rounded">
                      <td className="py-5 px-2.5">Фамилия и имя:</td>
                      <td className="py-5 px-2.5">Никифоров Михаил</td>
                    </tr>
                    <tr className="odd:bg-[#F2F4F7] rounded">
                      <td className="py-5 px-2.5">Номер телефона:</td>
                      <td className="py-5 px-2.5">
                        + 998 90 124-25-25 + 998 90 124-25-25
                      </td>
                    </tr>
                    <tr className="odd:bg-[#F2F4F7] rounded">
                      <td className="py-5 px-2.5">Ваш адрес №1:</td>
                      <td className="py-5 px-2.5">
                        г. Ташкент, улица Мукими, 166 ...
                      </td>
                    </tr>
                    <tr className="odd:bg-[#F2F4F7] rounded">
                      <td className="py-5 px-2.5">Ваш адрес №2:</td>
                      <td className="py-5 px-2.5">
                        г. Ташкент, улица Арнасай, 2 ...
                      </td>
                    </tr>
                  </table>
                </div>
                <div>
                  <Swipers />
                </div>
              </div>
            </div>
            <div className={item === 4 ? "block" : "hidden"}>item4</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MarketPage;
