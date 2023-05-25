// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";

import db from "../../../Assets/db.json";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import TeamSingleMember from "./TeamSingleMember";

const Team = () => {
  const { teamMembers } = db || {};

  const memberSlice = teamMembers?.slice(0, 4);

  return (
    <section className="px-6 lg:px-28 2xl:px-32 pt-10 md:pt-20 lg:pt-28">
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
          className="pb-10 md:pb-20 lg:pb-28"
        >
          {memberSlice?.map((teamMember) => (
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
