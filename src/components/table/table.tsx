import Image from "next/image";
import React from "react";
import search from "@/images/search.svg";
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
    </div>
  );
};

export default Table;
