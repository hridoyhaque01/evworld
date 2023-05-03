import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../Title";
// images

import { members } from "../../data/db";
import TeamSliderItem from "./TeamSliderItem";

export default function Team() {
  return (
    <section className="common-sec">
      <div className="container">
        <Title
          title="Meet Our Team"
          text="Our team of experts is dedicated to bringing you the best in electric
        mobility."
        />

        {/* team start */}

        <div className="team-content">
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {members?.map((member) => {
              const { id, image, name, position, instaLink, LinkedinLink } =
                member || {};

              return (
                <SwiperSlide key={id}>
                  <TeamSliderItem
                    image={image}
                    name={name}
                    position={position}
                    instaLink={instaLink}
                    LinkedinLink={LinkedinLink}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
