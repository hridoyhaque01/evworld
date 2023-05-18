import React from "react";
import { inovation, future, passin } from "../../../Assets/getImages";
import AboutSingleItem from "./AboutSingleItem";

function About() {
  return (
    <section className="w-10/12 mx-auto mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
        <div className="flex items-center lg:col-span-3 p-10 gap-4 bg-navySemi rounded-[40px]">
          {/* single about content  */}
          <AboutSingleItem
            icon={inovation}
            title="Mission and Vision"
            texts="Our mission is to create a cleaner and more sustainable future
              through electric mobility."
          ></AboutSingleItem>

          <div>
            <svg
              width="92"
              height="12"
              viewBox="0 0 92 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M90.4746 10.9551C45.4883 -11.411 1.01032 10.9551 1.01032 10.9551"
                stroke="#C1EF00"
                strokeWidth="1.42007"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="2.84 2.84"
              />
            </svg>
          </div>

          <AboutSingleItem
            icon={future}
            title="Greener Future"
            texts="We believe that a greener future is possible, and we are committed to making it a reality."
          ></AboutSingleItem>

          <div>
            <svg
              width="92"
              height="12"
              viewBox="0 0 92 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M90.9902 1.01465C46.0039 23.3807 1.52595 1.01466 1.52595 1.01466"
                stroke="#C1EF00"
                strokeWidth="1.42007"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="2.84 2.84"
              />
            </svg>
          </div>

          <AboutSingleItem
            icon={passin}
            title="Passion for Innovation"
            texts="Our journey began with a passion for innovation and a drive to revolutionize transportation."
          ></AboutSingleItem>
        </div>
        <div className="flex flex-col justify-center items-center text-center py-10 px-6 bg-whiteHigh rounded-[40px]">
          <div className="max-w-[200px]">
            <h4 className="font-clash text-3xl font-semibold text-blackHigh">
              Mission and Vision
            </h4>
            <p className="text-xs mt-3">
              Our mission is to create a cleaner and more sustainable future
              through electric mobility.
            </p>
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
