"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import close from "@/images/close.svg";
import { useState } from "react";
type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Modal({ isVisible , onClose}: any) {
  const [show, setShow] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const handleClose = (e:any)=>{
    if(e.target.id === "wrapper") onClose();
  }
  if (!isVisible) return null;
  return (
    <div
      className="w-full h-full fixed z-50 bg-black bg-opacity-50 top-0 left-0 flex flex-col justify-center" id="wrapper"
      onClick={handleClose}
    >
      <div className="flex flex-col bg-white w-[420px] m-auto py-[36px] px-[28px] rounded-[20px] relative max-sm:absolute max-sm:bottom-0 max-sm:w-full max-sm:rounded-b-none">
        <button
          className="flex absolute top-2 right-3"
          onClick={() => onClose()}
        >
          <Image src={close} alt="close btn" />
        </button>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
          <div className="flex flex-col gap-[24px]">
            <h2 className="font-bold text-3xl">Регистрация</h2>
            <div className="flex flex-col gap-[15px]">
              <input
                defaultValue="test"
                {...register("example")}
                className="rounded-[10px] bg-[#F2F4F7] py-[14px] px-[15px] text-[18px] text-[#98A2B3] font-light"
              />
              <input
                {...register("exampleRequired")}
                className="rounded-[10px] bg-[#F2F4F7] py-[14px] px-[15px] text-[18px] text-[#98A2B3] font-light"
              />
              <input
                {...register("exampleRequired")}
                className="rounded-[10px] bg-[#F2F4F7] py-[14px] px-[15px] text-[18px] text-[#98A2B3] font-light"
              />
            </div>
            <label htmlFor="check">
              <input
                type="checkbox"
                className="rounded-[10px] bg-[#F2F4F7] w-[24px] aspect-auto"
              />
              Я согласен на обработку персональных данных
            </label>
          </div>
          <button className="bg-black text-white mt-[30px] p-[14px] rounded-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
