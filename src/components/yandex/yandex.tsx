"use client";
import Image from "next/image";
import close from "@/images/close.svg";
import axios from "axios";
import React, { useState } from "react";
import {
  GeolocationControl,
  Map,
  Placemark,
  TypeSelector,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";

const Yandex: React.FC<{
  isShow: boolean;
  onClose: () => void;
  passData: any;
}> = ({ isShow, onClose, passData }) => {
  const [currentLocation, setCurrentLocation] = useState<number[] | null>(null);
  const [markedLocation, setMarkedLocation] = useState<number[] | null>(null);
  const [markedLocationName, setMarkedLocationName] = useState<any | null>(
    null
  );
  // const [searchValue, setSearchValue] = useState<string>("");
  const handleGetLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleMapClick = async (event: any) => {
    const clickedLocation = event.get("coords");
    setMarkedLocation(clickedLocation);

    try {
      const response = await axios.get("https://geocode-maps.yandex.ru/1.x/", {
        params: {
          format: "json",
          geocode: `${clickedLocation[1]},${clickedLocation[0]}`, // Yandex expects longitude,latitude
          apikey: "c08f1c38-efd8-448a-aad5-3ce83b4561b3",
        },
      });

      const featureMember =
        response.data.response.GeoObjectCollection.featureMember[0];
      const address =
        featureMember &&
        featureMember?.GeoObject &&
        featureMember?.GeoObject?.metaDataProperty?.GeocoderMetaData?.text;

      setMarkedLocationName(address || "Location name not available");
    } catch (error) {
      console.error("Error fetching location name:", error);
      setMarkedLocationName("Error fetching location name");
    }
  };
  // const handleSearchSubmit = (event: any, ymaps: any) => {
  //   event.preventDefault();
  //   ymaps.geocode(searchValue).then((res: any) => {
  //     const firstGeoObject = res.geoObjects.get(0);
  //     const coordinates = firstGeoObject.geometry.getCoordinates();
  //     setMarkedLocation(coordinates);
  //     setMarkedLocationName(firstGeoObject.getAddressLine());
  //   });
  // };
  console.log(markedLocationName);
  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };
  if (!isShow) return null;
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
        {/* <button
          onClick={() => passData(markedLocationName)}
          className="bg-black text-white mt-[30px] p-[14px] rounded-full"
        >
          Send
        </button> */}
        <YMaps>
          <div className="relative">
            <div className="flex justify-center">
              <p className="absolute z-40 -bottom-10 text-center font-bold text-3xl">
                {markedLocationName}
              </p>
            </div>
            <Map
              defaultState={{ center: [41.311081, 69.240562], zoom: 12 }}
              width="100%"
              height="400px"
              onClick={handleMapClick}
            >
              <ZoomControl options={{ float: "right" }} />
              <GeolocationControl
                geometry={currentLocation}
                onClick={handleGetLocationClick}
              />
              {markedLocation && <Placemark geometry={markedLocation} />}
              {currentLocation && <Placemark geometry={currentLocation} />}
              <TypeSelector
                options={{
                  float: "right",
                }}
              />
            </Map>
          </div>
        </YMaps>
      </div>
    </div>
  );
};

export default Yandex;
