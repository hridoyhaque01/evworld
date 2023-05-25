import React from "react";
import { future, inovation, passin } from "../../../Assets/getImages";
import AboutSingleItem from "./AboutSingleItem";

function About() {
  return (
    <section className="px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="relative after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-primaryColor after:-skew-x-12 px-3 py-4 md:py-8 xl:py-12 -mt-7 md:-mt-14 xl:-mt-16">
          <div className="relative grid grid-cols-3 z-10 text-blackFadeDark">
              <div className="flex items-end gap-1 mx-auto">
                <h4 className="text-base md:text-5xl font-bold">404</h4>
                <p className="text-xs">
                  <span className="block">mi</span>
                  <span className="block">Range</span>
                </p>
              </div>
              <div className="flex items-end gap-1 mx-auto">
                <h4 className="text-base md:text-5xl font-bold">1.99</h4>
                <p className="text-xs">
                  <span className="block">sec</span>
                  <span className="block">0-60 mph*</span>
                </p>
              </div>
              <div className="flex items-end gap-1 mx-auto">
                <h4 className="text-base md:text-5xl font-bold">200</h4>
                <p className="text-xs">
                  <span className="block">mph</span>
                  <span className="block">Top Speed</span>
                </p>
              </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 md:order-1">
              <AboutSingleItem
                  image={future}
                  title="Passion for Innovation"
                  texts="Our journey began with a passion for innovation and a drive to revolutionize transportation."
                  transform="md:translate-y-16"
                ></AboutSingleItem>
              <AboutSingleItem
                  image={inovation}
                  title="Passion for Innovation"
                  texts="Our journey began with a passion for innovation and a drive to revolutionize transportation."
                ></AboutSingleItem>
              <AboutSingleItem
                  image={passin}
                  title="Passion for Innovation"
                  texts="Our journey began with a passion for innovation and a drive to revolutionize transportation."
                  transform="md:translate-y-16"
                ></AboutSingleItem>
              <div className="text-center flex flex-col justify-center bg-pureWhite duration-300 shadow-lg max-w-sm mx-auto p-4">
                  <h4 className="text-xl text-navyDark leading-none font-semibold xl:text-2xl xl:font-bold uppercase">
                    Mission and Vision
                  </h4>
                  <p className="text-xs mt-4 text-blackFadeDark">
                      Our mission is to create a cleaner and more sustainable future through electric mobility.
                  </p>
              </div>
          </div>
          <div className="order-1 md:order-2 text-center md:text-right">
          <h2 className="font-clashBold text-2xl md:text-5xl text-primaryColor">About Us</h2>
          <p className="text-pureWhite mt-4">Our company is dedicated to creating a cleaner and more sustainable future through electric mobility. We manufacture electric vehicles, charging stations and chargers, home charging setups, car body parts, and a charging station located app/software. Our mission is to provide eco-friendly solutions that promote sustainability and efficiency, while delivering an exciting driving experience for our customers.</p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

// Mission and Vision
//
//
//
// Our mission is to create a cleaner and more sustainable future through electric mobility.
//
//
// Our mission is to create a cleaner and more sustainable future through electric mobility.
