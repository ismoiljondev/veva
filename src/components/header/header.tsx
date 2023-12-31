"use client";
import Container from "../container/container";
import Logo from "../logo/logo";
import Map from "../map/map";
import closeBtn from "../../images/close.png";
import Image from "next/image";
import { useState } from "react";
import Modal from "../modal/modal";
const links = [
  { link: "/", label: "Features" },
  { link: "/market", label: "Pricing" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
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
                console.log("hello");
              }}
            >
              <Image src={closeBtn} alt="close" />
            </div>
            {links.map((e) => (
              <a
                key={e?.label}
                href={e?.link}
                className="text-[#98A2B3] hover:underline hover:text-black focus:font-bold"
              >
                {e?.label}
              </a>
            ))}
          </div>
          <div></div>
        </div>
        <Map location="Select your location" />
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
      <Modal isVisible={show} onClose={() => setShow(false)} />
    </Container>
  );
};

export default Header;
