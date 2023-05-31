import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import getData from "../../../../utils/getData.json";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import ProductSingleItem from "./ProductSingleItem";

function Products() {
  const { products } = getData || {};
  return (
    <section className="px-6 pt-10 md:pt-20 ">
      <SectionTitle
        title="Featured Products"
        texts="Our team of experts is dedicated to bringing you the best in electric mobility."
      ></SectionTitle>

      <div className="mt-10 md:mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={12}
          pagination={{ clickable: true }}
          className="pb-16"
          breakpoints={{
            430: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product?.id}>
              <ProductSingleItem
                image={product?.image}
                title={product?.title}
              ></ProductSingleItem>
            </SwiperSlide>
          ))}
        </Swiper>
        {/*  */}

        <div className="flex justify-center">
          <Link
            to="/"
            className="text-base font-bold capitalize text-blackFadeDark flex items-center px-6 py-4 bg-primaryColor rounded-full"
          >
            <span>See All</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Products;
