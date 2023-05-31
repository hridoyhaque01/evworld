import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";

function Location() {
  const [zoom, setZoom] = useState(15);

  const handleZoomIn = () => {
    setZoom((prev) => prev + 1);
  };

  const handleZoomOut = () => {
    setZoom((prev) => prev - 1);
  };

  const center = {
    lat: 10.99835602,
    lng: 77.01502627,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) {
    return <p>loading....</p>;
  }

  return (
    <section className="hidden md:block md:pb-20 xl:pb-36">
      <div className="h-96 w-full relative rounded-3xl overflow-hidden">
        <div className="h-full">
          <GoogleMap
            center={center}
            zoom={zoom}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
            }}
          ></GoogleMap>
        </div>
        <div className="absolute top-4 left-4 z-30 flex flex-col gap-2">
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
      </div>
    </section>
  );
}

export default Location;
