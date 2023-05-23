import React from "react";
import { future, inovation, passin } from "../../../Assets/getImages";
import AboutSingleItem from "./AboutSingleItem";

function About() {
  return (
    <section className="px-6 md:px-0">
      <div className="flex flex-col md:flex-row items-center md:p-10 gap-4 lg:gap-12 md:shadow-md">
        {/* single about content  */}
        <AboutSingleItem
          icon={inovation}
          title="Mission and Vision"
          texts="Our mission is to create a cleaner and more sustainable future
              through electric mobility."
        ></AboutSingleItem>

        <div className="hidden md:block">
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

        <div className="hidden md:block">
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
