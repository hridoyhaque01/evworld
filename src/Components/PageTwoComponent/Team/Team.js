// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import TeamSingleMember from "./TeamSingleMember";
import db from "../../../Assets/db.json";

const Team = () => {
  const { teamMembers } = db || {};

  return (
    <section className="px-6 lg:px-28 2xl:px-32 py-10 md:py-20 lg:py-28">
      <SectionTitle
        title="Meet Our Team"
        texts="Our team of experts is dedicated to bringing you the best in electric mobility."
      ></SectionTitle>
      <div className="mt-4 md:mt-12 lg:mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={12}
          breakpoints={{
            430: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {teamMembers?.map((teamMember) => (
            <SwiperSlide key={teamMember.id}>
              <TeamSingleMember details={teamMember}></TeamSingleMember>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
