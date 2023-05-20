import React from "react";
import { acceleration, car, wheels } from "../../../Assets/getImages";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import BottomRightFeature from "./BottomRightFeature";
import BotttomLeftFeature from "./BotttomLeftFeature";
import CenterLaftFeature from "./CenterLaftFeature";
import CenterRightFeature from "./CenterRightFeature";
import TopLeftFeature from "./TopLeftFeature";
import TopRightFeature from "./TopRightFeature";

function CarFeature() {
  return (
    <section className="pt-10 pb-6 md:pt-20 lg:pt-28">
      <div className="w-10/12 mx-auto">
        <SectionTitle
          title="The Next Generation of Sustainable Driving"
          subtitle="Elvo 465 St Super"
          texts="Our electric car is designed to provide a smooth and comfortable ride while"
        ></SectionTitle>

        <div className="mt-20">
          {/* first row  */}
          <div className="flex items-center justify-between gap-4 lg:w-10/12 mx-auto">
            <TopLeftFeature></TopLeftFeature>
            <TopRightFeature></TopRightFeature>
          </div>

          {/* center row  */}

          <div className="flex items-center justify-center md:justify-between gap-10 my-8">
            <div className="flex flex-col lg:gap-20 2xl:gap-36">
              <CenterLaftFeature
                image={wheels}
                title="wheels"
                texts={`21" inch alloy wheels, low-rolling resistance tires.`}
              ></CenterLaftFeature>
              <CenterLaftFeature
                image={wheels}
                title="wheels"
                texts={`21" inch alloy wheels, low-rolling resistance tires.`}
              ></CenterLaftFeature>
              <CenterLaftFeature
                image={wheels}
                title="wheels"
                texts={`21" inch alloy wheels, low-rolling resistance tires.`}
              ></CenterLaftFeature>
            </div>
            <div className="">
              <img
                src={car}
                alt="car feature"
                className="w-[80px] sm:w-[144px] lg:w-[274px] 2xl:w-auto"
              />
            </div>
            <div className="flex flex-col sm:gap-10 lg:gap-20 2xl:gap-36">
              <CenterRightFeature
                image={acceleration}
                title="Acceleration"
                texts={`Instant torque for quick and smooth acceleration.`}
              ></CenterRightFeature>
              <CenterRightFeature
                image={acceleration}
                title="Acceleration"
                texts={`Instant torque for quick and smooth acceleration.`}
              ></CenterRightFeature>
              <CenterRightFeature
                image={acceleration}
                title="Acceleration"
                texts={`Instant torque for quick and smooth acceleration.`}
              ></CenterRightFeature>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 lg:w-10/12 mx-auto">
            <BotttomLeftFeature></BotttomLeftFeature>
            <BottomRightFeature></BottomRightFeature>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarFeature;
