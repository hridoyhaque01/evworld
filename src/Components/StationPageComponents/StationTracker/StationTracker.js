/* eslint-disable react-hooks/exhaustive-deps */
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

import getData from "../../../utils/getData.json";

function StationTracker() {
  const center = {
    lat: 37.914247651005205,
    lng: -122.09481147005769,
  };

  const { station } = getData || {};
  const [filterStations, setFilterStation] = useState(station);
  const [zoom, setZoom] = useState(13);
  const [map, setMap] = React.useState(null);
  const [types, setTypes] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(center);
  const [myLocation, setMyLocation] = useState(false);

  //functions

  // zoom out

  const handleZoomIn = () => {
    setZoom((prev) => prev + 1);
  };

  // zoom out

  const handleZoomOut = () => {
    setZoom((prev) => prev - 1);
  };

  // handle types

  const handleTypes = (checkType) => {
    setTypes((prevTypes) => {
      if (prevTypes.includes(checkType)) {
        return prevTypes.filter((type) => type !== checkType);
      } else {
        return [...prevTypes, checkType];
      }
    });
  };

  // handle Marker

  const handleMarker = () => {
    if (types?.length === 0) {
      return setFilterStation(station);
    } else {
      const filterData = station?.filter((marker) =>
        types?.includes(marker?.type)
      );
      setFilterStation(filterData);
    }
  };

  // setCurrent Location

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentLocation(location);
          setMyLocation(true);
          if (map !== null) {
            map.panTo(location);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      setMyLocation(false);
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    handleMarker();
  }, [types]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  return isLoaded ? (
    <section className="h-screen w-full relative">
      <div className="h-full">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={currentLocation}
          zoom={zoom}
          options={{
            zoomControl: false,
          }}
        >
          {myLocation && <Marker position={currentLocation}></Marker>}

          {filterStations?.map((locat) => (
            <Marker
              key={locat?.id}
              position={{
                lat: locat?.lat,
                lng: locat?.lng,
              }}
              icon={locat?.icon}
            ></Marker>
          ))}
        </GoogleMap>
      </div>
      <div className="absolute bottom-8 right-8 z-30 flex flex-col gap-2">
        <button
          className="w-12 h-12 rounded-full flex items-center justify-center bg-pureWhite"
          onClick={handleGetCurrentLocation}
        >
          <span className="material-symbols-outlined text-primaryColor">
            my_location
          </span>
        </button>

        <button
          className="w-12 h-12 rounded-full flex items-center justify-center bg-pureWhite"
          onClick={handleZoomIn}
        >
          <span className="material-symbols-outlined">add</span>
        </button>
        <button
          className="w-12 h-12 rounded-full flex items-center justify-center bg-pureWhite"
          onClick={handleZoomOut}
        >
          <span className="material-symbols-outlined">remove</span>
        </button>
      </div>
      <div className="absolute top-20 right-8 z-30 flex flex-col items-end gap-2 text-pureWhite">
        {/* fast charging  */}
        <button
          onClick={() => handleTypes("fast_charging")}
          className={`text-xs md:text-sm lg:text-base inline-flex items-center gap-1 px-4 py-2 max-w-max rounded-full bg-navyDark ${
            types?.includes("fast_charging") &&
            "bg-primaryColor text-blackFadeDark"
          }`}
        >
          <span className="material-symbols-outlined text-sm text-successColor">
            bolt
          </span>
          <span>Fast Charging Station</span>
        </button>
        {/* level two  */}
        <button
          onClick={() => handleTypes("level_two")}
          className={`text-xs md:text-sm lg:text-base inline-flex items-center gap-1 px-4 py-2 max-w-max rounded-full bg-navyDark ${
            types?.includes("level_two") && "bg-primaryColor text-blackFadeDark"
          }`}
        >
          <span className="text-successColor">L2</span>
          <span>Level 2 Charging Station</span>
        </button>
        {/* super charger  */}
        <button
          onClick={() => handleTypes("super_charger")}
          className={`text-xs md:text-sm lg:text-base inline-flex items-center gap-1 px-4 py-2 max-w-max rounded-full bg-navyDark ${
            types?.includes("super_charger") &&
            "bg-primaryColor text-blackFadeDark"
          }`}
        >
          <span className="material-symbols-outlined text-sm text-errorColor">
            bolt
          </span>
          <span>Superchargers</span>
        </button>
        {/* store  */}
        <button
          onClick={() => handleTypes("store")}
          className={`text-xs md:text-sm lg:text-base inline-flex items-center gap-1 px-4 py-2 max-w-max rounded-full bg-navyDark ${
            types?.includes("store") && "bg-primaryColor text-blackFadeDark"
          }`}
        >
          <span className="material-symbols-outlined text-sm text-warningColor">
            store_mall_directory
          </span>
          <span>Store and Body Shop</span>
        </button>
        {/* comming soon  */}
        <button
          onClick={() => handleTypes("commig_soon")}
          className={`text-xs md:text-sm lg:text-base inline-flex items-center gap-1 px-4 py-2 max-w-max rounded-full bg-navyDark ${
            types?.includes("commig_soon") &&
            "bg-primaryColor text-blackFadeDark"
          }`}
        >
          <span className="material-symbols-outlined text-sm text-whiteFade">
            bolt
          </span>
          <span>Coming Soon</span>
        </button>
        {/* super charger for everyone  */}
        <button
          onClick={() => handleTypes("supercharger_everyone")}
          className={`text-xs md:text-sm lg:text-base inline-flex items-center gap-1 px-4 py-2 max-w-max rounded-full bg-navyDark ${
            types?.includes("supercharger_everyone") &&
            "bg-primaryColor text-blackFadeDark"
          }`}
        >
          <span className="material-symbols-outlined text-sm text-infoColor">
            bolt
          </span>
          <span>Superchargers open to everyone</span>
        </button>
      </div>
      <div className="absolute top-4 left-4 sm:left-8 sm:right-auto flex flex-col items-end gap-2 text-pureWhite">
        <div className="flex items-center gap-4 bg-navyDark px-6 rounded-lg">
          <button type="button" className="flex items-center justify-center">
            <span className="material-symbols-outlined">search</span>
          </button>
          {/* <input
            type="text"
            className="w-60 py-3 bg-transparent outline-none"
            placeholder="Search for an Address or Location"
          /> */}
          <input
            type="text"
            className="w-52 sm:w-60 py-3 bg-transparent outline-none"
            placeholder="Search for an Address or Location"
          />
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default React.memo(StationTracker);
