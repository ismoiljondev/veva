"use client";
import axios from "axios";
import React, { useState } from "react";
import { Map, Placemark, YMaps, ZoomControl } from "react-yandex-maps";

const Yandex: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<number[] | null>(null);
  const [markedLocation, setMarkedLocation] = useState<number[] | null>(null);
  const [markedLocationName, setMarkedLocationName] = useState<string | null>(
    null
  );
  const [searchValue, setSearchValue] = useState<string>("");
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
  const handleSearchSubmit = (event: any, ymaps: any) => {
    event.preventDefault();
    ymaps.geocode(searchValue).then((res: any) => {
      const firstGeoObject = res.geoObjects.get(0);
      const coordinates = firstGeoObject.geometry.getCoordinates();
      setMarkedLocation(coordinates);
      setMarkedLocationName(firstGeoObject.getAddressLine());
    });
  };
  console.log(markedLocationName);
  return (
    <div className="relative">
      <button
        onClick={handleGetLocationClick}
        className="w-10 aspect-square bg-black rounded-full text-white absolute z-40 -bottom-3"
      >
        L
      </button>
      <p className="absolute z-40 -bottom-5 text-center font-bold text-3xl w-full">
        {markedLocationName}
      </p>
      <YMaps>
        <Map
          defaultState={{ center: [41, 69], zoom: 9 }}
          width="100%"
          height="400px"
          onClick={handleMapClick}
        >
          <ZoomControl options={{ float: "right" }} />
          {markedLocation && <Placemark geometry={markedLocation} />}
          {currentLocation && <Placemark geometry={currentLocation} />}
        </Map>
      </YMaps>
    </div>
  );
};

export default Yandex;
