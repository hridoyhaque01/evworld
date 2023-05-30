import React from "react";
import {
  accelerationTwo,
  batteryTwo,
  chargingTwo,
  electricTwo,
  featureCar,
  infotainmentTwo,
  wheelsTwo,
} from "../../../../utils/getImages";
import BottomRightFeature from "./BottomRightFeature";
import BotttomLeftFeature from "./BotttomLeftFeature";
import CenterLaftFeature from "./CenterLaftFeature";
import CenterRightFeature from "./CenterRightFeature";
import TopLeftFeature from "./TopLeftFeature";
import TopRightFeature from "./TopRightFeature";

import SectionTitleWithSubtitle from "../../../Shared/SectionTitle/SectionTitleWithSubtitle";
import "./carFeature.css";

function CarFeature() {
  return (
    <section className="px-6  pt-10 pb-6 md:pt-20 lg:pt-28">
      <div className="max-w-[1180px] mx-auto">
        <SectionTitleWithSubtitle
          dark={true}
          title="The Next Generation of Sustainable Driving"
          subtitle="Elvo 465 St Super"
        ></SectionTitleWithSubtitle>

        <div className="mt-10 sm:mt-20">
          {/* first row  */}
          <div className="flex items-center justify-center gap-4 md:gap-8 xl:gap-20 ">
            <TopLeftFeature></TopLeftFeature>
            <TopRightFeature></TopRightFeature>
          </div>

          {/* center row  */}

          <div className="flex justify-center items-center gap-2 sm:gap-10  sm:my-8">
            <div className="flex flex-col justify-between gap-3 md:gap-12 lg:gap-20 2xl:gap-36 h-full ">
              <CenterLaftFeature
                image={wheelsTwo}
                title="wheels"
                texts={`21" inch alloy wheels, low-rolling resistance tires.`}
              ></CenterLaftFeature>
              <CenterLaftFeature
                image={infotainmentTwo}
                title="Infotainment"
                texts={`Touchscreen infotainment with Apple CarPlay, Android Auto, Bluetooth, camera.`}
              ></CenterLaftFeature>
              <CenterLaftFeature
                image={electricTwo}
                title="Electric Motor"
                texts={`600 hp, 800 Nm electric motor.`}
              ></CenterLaftFeature>
            </div>
            <div className="shrink-0 w-[80px] sm:w-44 md:w-[274px] 2xl:w-auto duration-300">
              <img src={featureCar} alt="car feature" className="" />
            </div>
            <div className="flex flex-col justify-between gap-3 md:gap-12 lg:gap-20 2xl:gap-36 h-full">
              <CenterRightFeature
                image={accelerationTwo}
                title="Acceleration"
                texts={`Instant torque for quick and smooth acceleration.`}
              ></CenterRightFeature>
              <CenterRightFeature
                image={chargingTwo}
                title="Charging"
                texts={`Level 2 charging takes 20 Minutes, fast charging available.`}
              ></CenterRightFeature>
              <CenterRightFeature
                image={batteryTwo}
                title="Battery"
                texts={`120 kWh battery, 460 miles range.`}
              ></CenterRightFeature>
            </div>
          </div>

          <div className="flex items-start justify-center gap-4 md:gap-8 xl:gap-20 ">
            <BotttomLeftFeature></BotttomLeftFeature>
            <BottomRightFeature></BottomRightFeature>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarFeature;
