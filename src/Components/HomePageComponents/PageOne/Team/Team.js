import { Swiper, SwiperSlide } from "swiper/react";
import getData from "../../../../utils/getData.json";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import TeamSingleMember from "./TeamSingleMember";

const Team = () => {
  const { pageOneMembers } = getData || {};

  return (
    <section className=" py-10 md:py-20 lg:py-28">
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
          {pageOneMembers?.map((teamMember) => (
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
