import React from "react";
import { greener, passion, vission } from "../../../utils/getImages";
import AboutSingleItem from "./AboutSingleItem";

function About() {
  return (
    <section className="px-6 pt-10 md:pt-20 lg:pt-28">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* single about content  */}
          <AboutSingleItem
            image={vission}
            title="Mission and Vision"
            texts="Our mission is to create a cleaner and more sustainable future
              through electric mobility."
          ></AboutSingleItem>

          <AboutSingleItem
            image={greener}
            title="Greener Future"
            texts="We believe that a greener future is possible, and we are committed to making it a reality."
          ></AboutSingleItem>

          <AboutSingleItem
            image={passion}
            title="Passion for Innovation"
            texts="Our journey began with a passion for innovation and a drive to revolutionize transportation."
          ></AboutSingleItem>
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
