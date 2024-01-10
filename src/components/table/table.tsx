import Image from "next/image";
import React from "react";
import search from "@/images/search.svg";
import right from "@/images/right.svg";
import left from "@/images/left.svg";
const Table: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">История заказов</h1>
        <div className="flex items-center py-0.5 px-2.5 bg-[#F2F4F7] rounded-lg gap-2.5">
          <Image src={search} alt="search" />
          <input
            type="text"
            placeholder="Найти"
            className="bg-inherit focus:outline-none"
          />
        </div>
      </div>
      <table className="border border-solid border-[#98A2B3] border-t-0 border-x-0">
        <thead>
          <tr>
            <th className="border border-t-0 border-l-0 border-solid border-[#98A2B3] px-2.5 py-5 font-bold text-sm leading-6">
              №
            </th>
            <th className="border border-t-0  border-solid border-[#98A2B3] px-2.5 py-5 font-bold text-sm leading-6 text-left">
              Дата заказа
            </th>
            <th className="border border-t-0  border-solid border-[#98A2B3] px-2.5 py-5 font-bold text-sm leading-6 text-left">
              Дата доставки
            </th>
            <th className="border border-t-0  border-solid border-[#98A2B3] px-2.5 py-5 font-bold text-sm leading-6 text-left">
              Статус доставки
            </th>
            <th className="border border-t-0  border-solid border-[#98A2B3] px-2.5 py-5 font-bold text-sm leading-6 text-left">
              Вид товара
            </th>
            <th className="border border-t-0  border-solid border-[#98A2B3] px-2.5 py-5 font-bold text-sm leading-6 text-left">
              Кол-во
            </th>
            <th className="border border-t-0  border-solid border-[#98A2B3] px-2.5 py-5 font-bold text-sm leading-6 text-left">
              Стоимость 1 единицы
            </th>
            <th className="border border-t-0  border-solid border-[#98A2B3] px-2.5 py-5 font-bold text-sm leading-6 text-left">
              Сумма к оплате
            </th>
            <th className="border border-t-0 border-r-0 border-solid border-[#98A2B3] px-2.5 py-5 font-bold text-sm leading-6 text-left">
              Действие
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-l-0 border-solid border-[#98A2B3] px-2.5 py-5 ">
              Lorem.
            </td>
            <td className="border border-solid border-[#98A2B3] px-2.5 py-5 ">
              Nulla.
            </td>
            <td className="border border-solid border-[#98A2B3] px-2.5 py-5 ">
              Quasi?
            </td>
            <td className="border border-solid border-[#98A2B3] px-2.5 py-5 ">
              Dignissimos.
            </td>
            <td className="border border-solid border-[#98A2B3] px-2.5 py-5 ">
              Necessitatibus?
            </td>
            <td className="border border-solid border-[#98A2B3] px-2.5 py-5 ">
              Sed.
            </td>
            <td className="border border-solid border-[#98A2B3] px-2.5 py-5 ">
              Fugiat.
            </td>
            <td className="border border-solid border-[#98A2B3] px-2.5 py-5 ">
              Qui.
            </td>
            <td className="border border-solid border-r-0 border-[#98A2B3] px-2.5 py-5 ">
              Eligendi.
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex gap-10 items-center">
        <Image src={right} alt="right" />
        <div className="flex">
          <button className="focus:border focus:border-[#A8A8A8] focus:border-solid px-5 py-3 rounded-full focus:font-bold">
            1
          </button>
          <button className="focus:border focus:border-[#A8A8A8] focus:border-solid px-5 py-3 rounded-full focus:font-bold">
            2
          </button>
          <button className="focus:border focus:border-[#A8A8A8] focus:border-solid px-5 py-3 rounded-full focus:font-bold">
            3
          </button>
          <button className="focus:border focus:border-[#A8A8A8] focus:border-solid px-5 py-3 rounded-full focus:font-bold">
            ...
          </button>
          <button className="focus:border focus:border-[#A8A8A8] focus:border-solid px-5 py-3 rounded-full focus:font-bold">
            32
          </button>
        </div>
        <Image src={left} alt="left" />
      </div>
    </div>
  );
};

export default Table;
