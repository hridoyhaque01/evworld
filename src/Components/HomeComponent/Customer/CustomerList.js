// import Swiper core and required modules

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  customerOne,
  customerThree,
  customerTwo,
} from "../../../Assets/getImages";
import Customer from "./Customer";
// import "./customer.css";
import "swiper/css/pagination";

export const CustomerList = () => {
  const customers = [
    {
      id: 1,
      name: "Robert Fox",
      description:
        "I love my [Car Model Name]. It's the perfect car for my daily commute, and I feel good knowing that I'm doing my part for the environment.",
      image: customerOne,
      rating: 5,
    },

    {
      id: 2,
      name: "Carissa Cooper",
      description:
        "I love my [Car Model Name]. It's the perfect car for my daily commute, and I feel good knowing that I'm doing my part for the environment.",
      image: customerTwo,
      rating: 4,
    },
    {
      id: 3,
      name: "Sophia Loren",
      description:
        "I love my [Car Model Name]. It's the perfect car for my daily commute, and I feel good knowing that I'm doing my part for the environment.",
      image: customerThree,
      rating: 3,
    },
    {
      id: 4,
      name: "Robert Fox",
      description:
        "I love my [Car Model Name]. It's the perfect car for my daily commute, and I feel good knowing that I'm doing my part for the environment.",
      image: customerOne,
      rating: 5,
    },

    {
      id: 5,
      name: "Carissa Cooper",
      description:
        "I love my [Car Model Name]. It's the perfect car for my daily commute, and I feel good knowing that I'm doing my part for the environment.",
      image: customerTwo,
      rating: 4,
    },
    {
      id: 6,
      name: "Sophia Loren",
      description:
        "I love my [Car Model Name]. It's the perfect car for my daily commute, and I feel good knowing that I'm doing my part for the environment.",
      image: customerThree,
      rating: 3,
    },
    {
      id: 7,
      name: "Robert Fox",
      description:
        "I love my [Car Model Name]. It's the perfect car for my daily commute, and I feel good knowing that I'm doing my part for the environment.",
      image: customerOne,
      rating: 5,
    },

    {
      id: 8,
      name: "Carissa Cooper",
      description:
        "I love my [Car Model Name]. It's the perfect car for my daily commute, and I feel good knowing that I'm doing my part for the environment.",
      image: customerTwo,
      rating: 4,
    },
    {
      id: 9,
      name: "Sophia Loren",
      description:
        "I love my [Car Model Name]. It's the perfect car for my daily commute, and I feel good knowing that I'm doing my part for the environment.",
      image: customerThree,
      rating: 3,
    },
  ];

  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="w-10/12 mx-auto">
        <div>
          <h1 className="text-base md:text-4xl lg:text-6xl text-primaryColor font-clashBold text-center uppercase">
            Our Customers Say
          </h1>
        </div>
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
            {customers?.map((customer) => (
              <SwiperSlide key={customer.id}>
                <Customer details={customer}></Customer>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
