"use client";
import Image from "next/image";
import close from "@/images/close.svg";
export default function InfoModal({ isVisible, onClose }: any) {
  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };
  if (!isVisible) return null;
  return (
    <div
      className="w-full h-full fixed z-50 bg-black bg-opacity-50 top-0 left-0 flex flex-col justify-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex flex-col bg-white w-[682px] m-auto py-9 px-7 rounded-[20px] relative max-sm:absolute max-sm:bottom-0 max-sm:w-full max-sm:rounded-b-none">
        <button
          className="flex absolute top-2 right-3"
          onClick={() => onClose()}
        >
          <Image src={close} alt="close btn" />
        </button>
        <div className="flex flex-col gap-8 h-[500px]">
          <p className="text-3xl">Ознакомьтесь с правилами</p>
          <div className="overflow-y-scroll">
            <p className="text-sm">
              Настоящие Правила разработаны в соответствии с Законом Российской
              Федерации `О защите прав потребителей` и регулируют отношения
              между продавцами и потребителями при продаже товаров по договору
              розничной купли-продажи, в том числе отношения между продавцами и
              потребителями при дистанционном способе продажи товаров. <br />
              <br /> На торговых объектах (за исключением мест, которые
              определяются продавцом и не предназначены для свободного доступа
              потребителей) не допускается ограничение прав потребителей на
              поиск и получение любой информации в любых формах из любых
              источников, в том числе путем фотографирования товара, если такие
              действия не нарушают требования законодательства Российской
              Федерации и международных договоров Российской Федерации. <br />
              <br /> При продаже товаров потребителю предоставляется возможность
              самостоятельно или с помощью продавца ознакомиться с необходимыми
              товарами. Продавец обязан обеспечить наличие ценников на
              реализуемые товары с указанием наименования товара, цены за
              единицу товара или за единицу измерения товара (вес (масса нетто),
              длина и др.). <br />
              <br /> При продаже продавцом товара, который может быть измерен,
              продавец обязан применять средства измерений, находящиеся в
              исправном состоянии и соответствующие требованиям законодательства
              Российской Федерации об обеспечении единства измерений.
            </p>
          </div>
          <button className="bg-black text-white mt-[30px] p-[14px] rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
