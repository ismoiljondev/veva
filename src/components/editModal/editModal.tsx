"use client";
import Image from "next/image";
import close from "@/images/close.svg";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
type Inputs = {
  name: string;
  phone: string;
  adress: string;
  login: string;
  parol: string;
};
export default function EditModal({ isVisible, onClose }: any) {
  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
    </div>
  );
}
