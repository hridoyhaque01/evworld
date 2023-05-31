import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import getData from "../../../../utils/getData.json";
import Customer from "./Customer";

const CustomerList = () => {
  const { customers } = getData || {};

  return (
    <section className="pt-10 md:pt-20 lg:pt-28">
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
          className="pb-16"
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
              spaceBetween: 12,
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
    </section>
  );
};

export default CustomerList;
