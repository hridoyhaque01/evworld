// import Swiper core and required modules
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import getData from "../../../../utils/getData.json";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import TeamSingleMember from "./TeamSingleMember";

const Team = () => {
  const { pageFourMembers } = getData || {};

  return (
    <section className="px-6 pt-10 md:pt-20 lg:pt-28">
      <div className="max-w-[1180px] mx-auto">
        <SectionTitle
          title="Meet Our Team"
          texts="Our team of experts is dedicated to bringing you the best in electric mobility."
        ></SectionTitle>
        <div className="mt-4 md:mt-12 lg:mt-20">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={12}
            pagination={{ clickable: true }}
            breakpoints={{
              430: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },

              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="pb-16"
          >
            {pageFourMembers?.map((teamMember) => (
              <SwiperSlide key={teamMember.id}>
                <TeamSingleMember details={teamMember}></TeamSingleMember>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
