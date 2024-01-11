import React from "react";

const Info: React.FC = () => {
  return (
    <div className="w-[455px] aspect-square rounded-full bg-[#1CBBEE] flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <p className="text-3xl">
          Вода <br /> в капсулах 18,9 Л
        </p>
        <div className="flex flex-col gap-2.5">
          <div className="flex">
            <p className="text-sm text-white">Кальций+</p>
            <p className="text-sm text-white">....................</p>
            <p className="text-sm text-white">40 мг/л</p>
          </div>
          <div className="flex">
            <p className="text-sm text-white">Магний+</p>
            <p className="text-sm text-white">....................</p>
            <p className="text-sm text-white">20 мг/л</p>
          </div>
          <div className="flex">
            <p className="text-sm text-white">Натрий</p>
            <p className="text-sm text-white ">....................</p>
            <p className="text-sm text-white">50 мг/л</p>
          </div>
          <div className="flex">
            <p className="text-sm text-white">Хлор</p>
            <p className="text-sm text-white">......................</p>
            <p className="text-sm text-white">200 мг</p>
          </div>
          <div className="flex">
            <p className="text-sm text-white">Кислотность</p>
            <p className="text-sm text-white">....................</p>
            <p className="text-sm text-white">5 мг</p>
          </div>
          <div className="flex">
            <p className="text-sm text-white">Минерализация</p>
            <p className="text-sm text-white">....................</p>
            <p className="text-sm text-white">2,0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
