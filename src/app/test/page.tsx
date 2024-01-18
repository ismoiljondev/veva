"use client";
import Container from "@/components/container/container";
import YandexMap from "@/components/yadextest/yandextest";

import React from "react";

const Test: React.FC = () => {
  return (
    <Container>
      <YandexMap coordinates={[41, 69]} />
    </Container>
  );
};

export default Test;
