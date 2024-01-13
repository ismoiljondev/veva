"use client";
import Image from "next/image";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import close from "@/images/close.svg";
import { IMaskInput } from "react-imask";
import { useState } from "react";
import Link from "next/link";
type Inputs = {
  name: string;
  phone: string;
  adress: string;
  login: string;
  parol: string;
};

export default function Modal({ isVisible, onClose }: any) {
  const [item, setItem] = useState(1);
  function setToggle(id: number) {
    setItem(id);
  }
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
      <div className="flex flex-col w-[420px] m-auto max-sm:absolute max-sm:bottom-0 max-sm:w-full max-sm:rounded-b-none">
        <div className="flex border-[#98A2B3] max-sm:flex-col self-start">
          <button
            className={`px-[24px] py-[14px] bg-[rgba(255,255,255,0.30)]  ${
              item === 1
                ? "text-[#1CBBEE] bg-white font-bold backdrop-blur-none"
                : "text-white"
            } rounded-tr-none rounded-t-[10px] backdrop-blur-[20px]`}
            onClick={() => setToggle(1)}
          >
            Физ. лицо
          </button>
          <button
            className={`py-[14px] px-[24px] ${
              item === 2 ? "text-[#1CBBEE] bg-white" : "text-white"
            } rounded-tl-none bg-[rgba(255,255,255,0.30)] rounded-t-[10px] focus:font-bold backdrop-blur-[20px]`}
            onClick={() => setToggle(2)}
          >
            Pompa
          </button>
        </div>
        <div
          className={
            item === 1
              ? "flex flex-col bg-white py-[36px] px-[28px] rounded-[20px] rounded-tl-none	 relative max-sm:w-full"
              : "hidden"
          }
        >
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
                  placeholder="Ваша фамилия и имя"
                  {...register("name")}
                  className="rounded-[10px] bg-[#F2F4F7] py-[14px] px-[15px] text-[18px] text-[#98A2B3] font-light"
                />

                <Controller
                  control={control}
                  name="phone"
                  defaultValue=""
                  render={({ field }) => (
                    <IMaskInput
                      {...field}
                      mask="00 000-00-00"
                      placeholder="00 000-00-00"
                      className="rounded-[10px] bg-[#F2F4F7] py-[14px] px-[15px] text-[18px] text-[#98A2B3] font-light"
                    />
                  )}
                />
                <input
                  {...register("adress")}
                  className="rounded-[10px] bg-[#F2F4F7] py-[14px] px-[15px] text-[18px] text-[#98A2B3] font-light"
                  placeholder="Укажите адрес доставки"
                  data-mask
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
        <div
          className={
            item === 2
              ? "flex flex-col bg-white py-[36px] px-[28px] rounded-tl-none	 rounded-[20px] relative max-sm:w-full"
              : "hidden"
          }
        >
          <button
            className="flex absolute top-2 right-3"
            onClick={() => onClose()}
          >
            <Image src={close} alt="close btn" />
          </button>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-bold text-3xl">Вход в личный кабинет</h2>
              <div className="flex flex-col gap-[15px]">
                <input
                  placeholder="Ваша фамилия и имя"
                  {...register("login")}
                  className="rounded-[10px] bg-[#F2F4F7] py-[14px] px-[15px] text-[18px] text-[#98A2B3] font-light"
                />
                <input
                  {...register("parol")}
                  className="rounded-[10px] bg-[#F2F4F7] py-[14px] px-[15px] text-[18px] text-[#98A2B3] font-light"
                  placeholder="Укажите адрес доставки"
                  data-mask
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
            <div className="flex flex-col gap-5">
              <button className="bg-black text-white mt-[30px] p-[14px] rounded-full w-full">
                Submit
              </button>

              <Link
                href={"/"}
                className="text-lg text-[#98A2B3] flex items-center justify-center"
              >
                <span className="underline">Забыли пароль?</span> Восстановить.
              </Link>
              <p className="font-normal">
                Для регистрации обратитесь к менеджеру по телефону:{" "}
                <span className="font-bold">+998 55 519 90 90</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
