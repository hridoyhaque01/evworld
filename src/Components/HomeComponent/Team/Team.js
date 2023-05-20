// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";
import {
  memberFour,
  memberOne,
  memberThree,
  memberTwo,
} from "../../../Assets/getImages";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import TeamSingleMember from "./TeamSingleMember";

export const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Theresa Webb",
      position: "CEO (Chief Executive Officer)",
      instaLink: "/",
      linkedinLink: "/",
      image: memberOne,
    },
    {
      id: 2,
      name: "Kathryn Murphy",
      position: "CEO (Chief Executive Officer)",
      instaLink: "/",
      linkedinLink: "/",
      image: memberTwo,
    },
    {
      id: 3,
      name: "Devon Lane",
      position: "CEO (Chief Executive Officer)",
      instaLink: "/",
      linkedinLink: "/",
      image: memberThree,
    },
    {
      id: 4,
      name: "Brooklyn Simmons",
      position: "CEO (Chief Executive Officer)",
      instaLink: "/",
      linkedinLink: "/",
      image: memberFour,
    },
  ];

  return (
    <section className="pt-10 pb-6 md:pt-20 lg:pt-28">
      <div className="w-10/12 mx-auto">
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
      </div>
    </section>
  );
};
