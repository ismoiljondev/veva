import Image from "next/image";
import React from "react";
import logoImage from "@/images/logo.png";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image src={logoImage} alt="this is image" />
      </Link>
    </div>
  );
};

export default Logo;
