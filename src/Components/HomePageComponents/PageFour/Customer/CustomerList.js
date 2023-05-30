// import Swiper core and required modules

import { Navigation } from "swiper";
import "swiper/css/navigation";
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
        <div className="mt-8 md:mt-12 lg:mt-20">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            navigation={{
              nextEl: ".slide-next",
              prevEl: ".slide-prev",
              disabledClass: "swiper-button-disabled",
            }}
            className="pb-16"
          >
            {customers?.map((customer) => (
              <SwiperSlide key={customer.id}>
                <Customer details={customer}></Customer>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center gap-12">
            <div className="slide-prev cursor-pointer w-14 h-14 flex items-center justify-center bg-navySemi text-pureWhite rounded-full shadow-md select-none">
              <span class="material-symbols-outlined ">west</span>
            </div>
            <div className="slide-next cursor-pointer w-14 h-14 flex items-center justify-center bg-navySemi text-pureWhite rounded-full shadow-md select-none">
              <span class="material-symbols-outlined">
                <span class="material-symbols-outlined">east</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerList;
