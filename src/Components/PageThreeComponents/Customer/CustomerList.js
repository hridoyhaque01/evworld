// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import db from "../../../Assets/db.json";
import Customer from "./Customer";

const CustomerList = () => {
  const { customers } = db || {};

  return (
    <section className="px-6 lg:px-28 2xl:px-32 pt-10 md:pt-20 lg:pt-28">
      <div>
        <h1 className="text-base md:text-4xl lg:text-6xl text-navyDark font-clashBold text-center uppercase">
          Our Customers Say
        </h1>
      </div>
      <div className="mt-4 md:mt-12 lg:mt-20">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="py-16 "
        >
          {customers?.map((customer) => (
            <SwiperSlide key={customer.id}>
              <Customer details={customer}></Customer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerList;
