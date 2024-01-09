import Image from "next/image";
import React from "react";
import search from "@/images/search.svg";
const Table: React.FC = () => {
  return (
    <div className="flex flex-col">
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
    </div>
  );
};

export default Table;
