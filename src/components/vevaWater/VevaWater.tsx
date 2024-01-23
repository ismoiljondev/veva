"use client";
import Image from "next/image";
import React, { useState } from "react";
import water from "@/images/veva.svg";
import plus from "@/images/plus.svg";
import Info from "../info/info";
import cbtn from "@/images/cbtn.svg";
const VevaWater: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex">
        <div className="relative">
          <div>
            <Image src={water} alt="water" />
          </div>
          <div
            className={`absolute top-28 -right-8 cursor-pointer ${
              !open ? "block" : "hidden"
            }`}
          >
            <Image src={plus} alt="close" onClick={() => setOpen(true)} />
          </div>
          <div
            className={`absolute top-28 -right-8 cursor-pointer ${
              open ? "block" : "hidden"
            }`}
          >
            <Image src={cbtn} alt="close" onClick={() => setOpen(false)} />
          </div>
        </div>
        <div
          className={`-translate-x-20 -z-20 absolute left-72 ${
            open ? "flex" : "hidden"
          }`}
        >
          <Info />
        </div>
      </div>
    </div>
  );
};

export default VevaWater;
