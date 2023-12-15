import React from "react";
import Container from "../container/container";
import Logo from "../logo/logo";
import Image from "next/image";
import faceBook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import Link from "next/link";
type footerProps = {
  text: string;
  desc: string;
  phone: string;
  phoneNumber: string;
  call: string;
  withs: string;
};

const Footer: React.FC = () => {
  return (
    <div className="pb-[30px]">
      <Container>
        <Link href={"https://t.me"} target="_blank">
          <div className="hidden max-sm:flex gap-[15px] items-center border-[#1CBBEE] border-solid border-[1px] px-[20px] py-[7px] rounded-full justify-center bg-[#1CBBEE] mb-[40px] shadow-[0_20px_20px_0_rgba(0,0,0,0.20)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
            >
              <path
                d="M9.4174 13.4619L9.0204 19.046C9.58841 19.046 9.83441 18.802 10.1294 18.509L12.7925 15.9639L18.3106 20.005C19.3226 20.569 20.0357 20.272 20.3087 19.074L23.9308 2.1016L23.9318 2.1006C24.2528 0.604565 23.3907 0.0195506 22.4047 0.386559L1.1142 8.53775C-0.33883 9.10177 -0.31683 9.91179 0.867199 10.2788L6.31033 11.9718L18.9536 4.06065C19.5486 3.66664 20.0897 3.88464 19.6446 4.27865L9.4174 13.4619Z"
                fill="#ffff"
              />
            </svg>
            <div>
              <p className="text-[12px] text-white">Заказать через</p>
              <h2 className="text-[14px] font-bold text-white">
                телеграмм бот
              </h2>
            </div>
          </div>
        </Link>
        <div className="flex justify-between items-center pt-[30px] border-t-[2px] border-solid border-[#98A2B3]">
          <div className="flex items-center justify-between gap-[30px] max-xl:flex-col-reverse max-xl:place-items-start max-xl:gap-[10px]">
            <div className="max-xl:hidden">
              <Logo />
            </div>
            <div>
              <p>VEVA © </p>
              <p> Все права защищены. 2023</p>
            </div>
            <div>
              <p className="underline">Договор оферты</p>
              <p className="underline">Сертификаты</p>
            </div>
          </div>
          <div className="flex justify-between items-center max-xl:flex-col-reverse max-xl:place-items-end gap-[10px]">
            <div className="flex gap-2 items-center">
              <Link href={"https://facebook.com"} target="_blank">
                <Image src={faceBook} alt="faceBook image" />
              </Link>
              <Link href={"https://instagram.com"} target="_blank">
                <Image src={instagram} alt="instagram logo"></Image>
              </Link>
              <Link
                href={"https://t.me"}
                target="_blank"
                className="max-sm:hidden"
              >
                <div className="flex gap-[10px] items-center border-[#1CBBEE] border-solid border-[1px] px-[20px] py-[7px] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                    fill="none"
                  >
                    <path
                      d="M9.4174 13.4619L9.0204 19.046C9.58841 19.046 9.83441 18.802 10.1294 18.509L12.7925 15.9639L18.3106 20.005C19.3226 20.569 20.0357 20.272 20.3087 19.074L23.9308 2.1016L23.9318 2.1006C24.2528 0.604565 23.3907 0.0195506 22.4047 0.386559L1.1142 8.53775C-0.33883 9.10177 -0.31683 9.91179 0.867199 10.2788L6.31033 11.9718L18.9536 4.06065C19.5486 3.66664 20.0897 3.88464 19.6446 4.27865L9.4174 13.4619Z"
                      fill="#1CBBEE"
                    />
                  </svg>
                  <div>
                    <p className="text-[12px]">Заказать через</p>
                    <h2 className="text-[14px] font-bold">телеграмм бот</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <p className="text-right">Телефон:</p>
              <h2 className="font-bold text-[18px]">+998 55 519 90 90</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
