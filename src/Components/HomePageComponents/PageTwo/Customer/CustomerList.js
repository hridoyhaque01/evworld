// import Swiper core and required modules

import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import getData from "../../../../utils/getData.json";
import Customer from "./Customer";

const CustomerList = () => {
  const { customers } = getData || {};

  return (
    <section className="px-6 pt-10 md:pt-20 lg:pt-28">
      <div className="max-w-[1180px] mx-auto">
        <div>
          <h1 className="text-base md:text-4xl lg:text-6xl text-navyDark font-clashBold text-center uppercase">
            Our Customers Say
          </h1>
        </div>
        <div className="mt-4 md:mt-12 lg:mt-20">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={12}
            pagination={{ clickable: true }}
            className="py-16 "
            breakpoints={{
              430: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3,
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

export default CustomerList;
