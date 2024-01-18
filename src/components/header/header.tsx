"use client";
import Container from "../container/container";
import Logo from "../logo/logo";
import closeBtn from "@/images/closeBtn.svg";
import Image from "next/image";
import { useState } from "react";
import Modal from "../modal/modal";
import { usePathname } from "next/navigation";
import Yandex from "../yandex/yandex";
const links = [
  { link: "/", label: "Главная" },
  { link: "/market", label: "Магазин товаров" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [map, setMap] = useState(false);
  const pathname = usePathname();
  return (
    <Container>
      <div className="flex justify-between py-[20px] items-center max-2xl:py-[30px] max-md:py-[10px]">
        <div className="flex gap-[12px] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            className="hidden max-lg:block"
            onClick={() => setOpen(!open)}
          >
            <path
              d="M3.01884 8H21.0188C21.2841 8 21.5384 7.89464 21.726 7.70711C21.9135 7.51957 22.0188 7.26522 22.0188 7C22.0188 6.73478 21.9135 6.48043 21.726 6.29289C21.5384 6.10536 21.2841 6 21.0188 6H3.01884C2.75363 6 2.49927 6.10536 2.31174 6.29289C2.1242 6.48043 2.01884 6.73478 2.01884 7C2.01884 7.26522 2.1242 7.51957 2.31174 7.70711C2.49927 7.89464 2.75363 8 3.01884 8ZM21.0188 16H3.01884C2.75363 16 2.49927 16.1054 2.31174 16.2929C2.1242 16.4804 2.01884 16.7348 2.01884 17C2.01884 17.2652 2.1242 17.5196 2.31174 17.7071C2.49927 17.8946 2.75363 18 3.01884 18H21.0188C21.2841 18 21.5384 17.8946 21.726 17.7071C21.9135 17.5196 22.0188 17.2652 22.0188 17C22.0188 16.7348 21.9135 16.4804 21.726 16.2929C21.5384 16.1054 21.2841 16 21.0188 16ZM21.0188 11H3.01884C2.75363 11 2.49927 11.1054 2.31174 11.2929C2.1242 11.4804 2.01884 11.7348 2.01884 12C2.01884 12.2652 2.1242 12.5196 2.31174 12.7071C2.49927 12.8946 2.75363 13 3.01884 13H21.0188C21.2841 13 21.5384 12.8946 21.726 12.7071C21.9135 12.5196 22.0188 12.2652 22.0188 12C22.0188 11.7348 21.9135 11.4804 21.726 11.2929C21.5384 11.1054 21.2841 11 21.0188 11Z"
              fill="black"
            />
          </svg>
          <Logo />
        </div>
        <input type="checkbox" className="hidden" id="menu" />
        <div
          className={`flex gap-[40px] duration-700 max-lg:fixed max-lg:bg-white max-lg:w-[60%] max-lg:left-0 max-lg:top-0 max-lg:h-[100%] max-lg:py-[40px] max-lg:px-[15px] ${
            !open ? "max-lg:translate-x-[-100%]" : "max-lg:translate-x-0"
          }`}
        >
          <div className="flex gap-[40px] max-lg:flex-col max-lg:gap-[20px]">
            <div
              className="hidden max-lg:block"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Image src={closeBtn} alt="close" />
            </div>
            {links.map((e) => (
              <a
                key={e?.label}
                href={e?.link}
                className={`text-[#98A2B3] ${
                  pathname === e?.link
                    ? "text-black underline font-bold"
                    : "font-normal"
                }`}
              >
                {e?.label}
              </a>
            ))}
          </div>
          <div></div>
        </div>
        <div
          className="flex max-sm:fixed max-sm:top-[85px] max-sm:w-full"
          onClick={() => setMap(true)}
        >
          <button className="px-[18px] py-[9px] bg-white rounded-[10px] flex gap-[8px] w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M20.9601 9.62999C20.8304 8.27182 20.3758 6.96481 19.6345 5.81941C18.8932 4.67401 17.8871 3.72388 16.7012 3.04931C15.5153 2.37474 14.1844 1.99554 12.8211 1.94377C11.4577 1.89201 10.1019 2.16918 8.86826 2.75188C7.63461 3.33458 6.55935 4.20568 5.73335 5.29157C4.90734 6.37745 4.35487 7.64622 4.12261 8.99065C3.89035 10.3351 3.98513 11.7157 4.39894 13.0157C4.81275 14.3158 5.53343 15.4972 6.50008 16.46L11.8001 21.77C11.893 21.8637 12.0036 21.9381 12.1255 21.9889C12.2474 22.0396 12.3781 22.0658 12.5101 22.0658C12.6421 22.0658 12.7728 22.0396 12.8947 21.9889C13.0165 21.9381 13.1271 21.8637 13.2201 21.77L18.5001 16.46C19.3913 15.5754 20.0744 14.5036 20.4999 13.3223C20.9254 12.1409 21.0826 10.8796 20.9601 9.62999ZM17.1001 15.05L12.5001 19.65L7.90008 15.05C7.22217 14.372 6.70288 13.5523 6.37954 12.6497C6.05621 11.7472 5.93686 10.7842 6.03008 9.82999C6.1239 8.86109 6.43184 7.92515 6.93165 7.08983C7.43145 6.25451 8.11063 5.54069 8.92008 4.99999C9.98102 4.29522 11.2264 3.91928 12.5001 3.91928C13.7738 3.91928 15.0191 4.29522 16.0801 4.99999C16.8871 5.5386 17.5647 6.24927 18.0644 7.08092C18.5641 7.91258 18.8734 8.84459 18.9701 9.80999C19.0663 10.7674 18.9485 11.7343 18.6251 12.6405C18.3016 13.5468 17.7807 14.3698 17.1001 15.05ZM14.2901 6.24999C14.1971 6.15626 14.0865 6.08186 13.9647 6.03109C13.8428 5.98033 13.7121 5.95419 13.5801 5.95419C13.4481 5.95419 13.3174 5.98033 13.1955 6.03109C13.0736 6.08186 12.963 6.15626 12.8701 6.24999L9.29008 9.82999C9.10533 10.0162 9.00118 10.2676 9.00008 10.53V13C9.00008 13.2652 9.10543 13.5196 9.29297 13.7071C9.48051 13.8946 9.73486 14 10.0001 14H12.4201C12.5517 14.0007 12.6821 13.9755 12.804 13.9258C12.9258 13.876 13.0366 13.8027 13.1301 13.71L16.7101 10.13C16.8963 9.94262 17.0009 9.68917 17.0009 9.42499C17.0009 9.1608 16.8963 8.90735 16.7101 8.71999L14.2901 6.24999ZM12.0101 12H11.0101V11L13.5901 8.41999L14.5901 9.41999L12.0101 12Z"
                fill="black"
              />
            </svg>
            Select your location
          </button>
        </div>
        <div className="flex gap-1">
          <select
            name="lan"
            id="lan"
            className="py-[10px] px-[18px] rounded-l-[50px] max-sm:rounded-r-[50px]"
          >
            <option value="uz">Uz</option>
            <option value="ru">RU</option>
            <option value="eng">eng</option>
          </select>
          <button
            className="py-[9px] px-[18px] rounded-r-[50px] bg-white flex gap-[8px] max-sm:rounded-l-[50px] max-sm:px-[9px]"
            onClick={() => setShow(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C10.0605 2.00369 8.16393 2.57131 6.54128 3.63374C4.91862 4.69617 3.63994 6.20754 2.86099 7.98377C2.08204 9.76 1.83643 11.7244 2.15408 13.6378C2.47173 15.5511 3.33893 17.3308 4.65005 18.76C5.58647 19.775 6.72299 20.5851 7.98799 21.1392C9.25298 21.6933 10.619 21.9793 12 21.9793C13.3811 21.9793 14.7471 21.6933 16.0121 21.1392C17.2771 20.5851 18.4136 19.775 19.35 18.76C20.6612 17.3308 21.5284 15.5511 21.846 13.6378C22.1637 11.7244 21.9181 9.76 21.1391 7.98377C20.3602 6.20754 19.0815 4.69617 17.4588 3.63374C15.8362 2.57131 13.9396 2.00369 12 2ZM12 20C9.92851 19.9969 7.93896 19.1903 6.45005 17.75C6.90209 16.6495 7.67108 15.7083 8.6593 15.0459C9.64752 14.3835 10.8104 14.0298 12 14.0298C13.1897 14.0298 14.3526 14.3835 15.3408 15.0459C16.329 15.7083 17.098 16.6495 17.55 17.75C16.0611 19.1903 14.0716 19.9969 12 20ZM10 10C10 9.60444 10.1173 9.21776 10.3371 8.88886C10.5569 8.55996 10.8692 8.30362 11.2347 8.15224C11.6001 8.00087 12.0023 7.96126 12.3902 8.03843C12.7782 8.1156 13.1346 8.30608 13.4143 8.58579C13.694 8.86549 13.8844 9.22186 13.9616 9.60982C14.0388 9.99778 13.9992 10.3999 13.8478 10.7654C13.6964 11.1308 13.4401 11.4432 13.1112 11.6629C12.7823 11.8827 12.3956 12 12 12C11.4696 12 10.9609 11.7893 10.5858 11.4142C10.2108 11.0391 10 10.5304 10 10ZM18.91 16C18.0166 14.4718 16.6415 13.283 15 12.62C15.5092 12.0427 15.841 11.3307 15.9555 10.5694C16.0701 9.80822 15.9625 9.03011 15.6458 8.3285C15.3291 7.62688 14.8166 7.03156 14.17 6.61397C13.5233 6.19637 12.7698 5.97425 12 5.97425C11.2303 5.97425 10.4768 6.19637 9.83014 6.61397C9.18346 7.03156 8.67102 7.62688 8.3543 8.3285C8.03758 9.03011 7.93004 9.80822 8.04458 10.5694C8.15912 11.3307 8.49088 12.0427 9.00005 12.62C7.35865 13.283 5.98352 14.4718 5.09005 16C4.37799 14.7871 4.00177 13.4065 4.00005 12C4.00005 9.87827 4.8429 7.84344 6.34319 6.34315C7.84349 4.84285 9.87832 4 12 4C14.1218 4 16.1566 4.84285 17.6569 6.34315C19.1572 7.84344 20 9.87827 20 12C19.9983 13.4065 19.6221 14.7871 18.91 16Z"
                fill="black"
              />
            </svg>{" "}
            <p className="max-sm:hidden">Admin</p>
          </button>
        </div>
      </div>
      <Yandex isShow={map} onClose={() => setMap(false)} />
      <Modal isVisible={show} onClose={() => setShow(false)} />
    </Container>
  );
};

export default Header;
