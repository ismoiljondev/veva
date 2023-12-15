import Card from "@/components/card/card";
import Container from "@/components/container/container";
import React from "react";
import water from "@/images/water.png";
import Image from "next/image";
import navbar from "@/images/Vector.png";
const MarketPage = () => {
  return (
    <>
      <Image src={navbar} alt="some" className="fixed top-[100px]" />
      <Container>
        <div className="flex flex-col gap-[50px] mt-5">
          <h1 className="text-3xl font-bold">Магазин товаров</h1>
          <Card
            image={water}
            text={"Вода в бутилированной бутылке"}
            litr={"18,9 л."}
            sum={"Итоговая стоимость:"}
            cost={0}
          />
        </div>
      </Container>
    </>
  );
};

export default MarketPage;
