// components/YandexMap.tsx
import React, { useEffect } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

interface YandexMapProps {
  coordinates: number[];
}

const YandexMap: React.FC<YandexMapProps> = ({ coordinates }) => {
  useEffect(() => {
    // Initialize Yandex Map when component mounts
    // You may need to replace YOUR_API_KEY with your Yandex Map API key
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=en_US";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Create the map and add a placemark
      const ymaps = window.ymaps;
      const map = new ymaps.Map("map", {
        center: coordinates,
        zoom: 10,
      });

      const placemark = new ymaps.Placemark(coordinates);
      map.geoObjects.add(placemark);
    };

    return () => {
      // Cleanup when the component unmounts
      document.head.removeChild(script);
    };
  }, [coordinates]);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "400px" }}
      className="bg-black"
    ></div>
  );
};

export default YandexMap;
