"use client";
import Image from "next/image";
import close from "@/images/close.svg";
export default function DoneModal({ isVisible, onClose }: any) {
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
      <div className="flex flex-col bg-white w-[582px] m-auto py-9 px-7 rounded-[20px] relative max-sm:absolute max-sm:bottom-0 max-sm:w-full max-sm:rounded-b-none">
        <button
          className="flex absolute top-2 right-3"
          onClick={() => onClose()}
        >
          <Image src={close} alt="close btn" />
        </button>
        <div className="flex flex-col gap-12 w-full">
          <h1 className="text-3xl font-bold">Личная информация</h1>
          <table className="w-full">
            <tr className="odd:bg-[#F2F4F7] rounded">
              <td className="text-lg even:font-bold py-5 px-2.5">
                Фамилия и имя:
              </td>
              <td className="text-lg even:font-bold py-5 px-2.5">
                Никифоров Михаил
              </td>
            </tr>
            <tr className="odd:bg-[#F2F4F7] rounded">
              <td className="text-lg even:font-bold py-5 px-2.5">
                Номер телефона:
              </td>
              <td className="text-lg even:font-bold py-5 px-2.5">
                + 998 90 124-25-25 + 998 90 124-25-25
              </td>
            </tr>
            <tr className="odd:bg-[#F2F4F7] rounded">
              <td className="text-lg even:font-bold py-5 px-2.5">
                Ваш адрес №1:
              </td>
              <td className=" text-lg even:font-bold py-5 px-2.5">
                г. Ташкент, улица Мукими, 166 ...
              </td>
            </tr>
            <tr className="odd:bg-[#F2F4F7] rounded">
              <td className="text-lg even:font-bold py-5 px-2.5">
                Ваш адрес №2:
              </td>
              <td className="text-lg even:font-bold py-5 px-2.5">
                г. Ташкент, улица Арнасай, 2 ...
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
