import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import db from "../../../Assets/db.json";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import ProductSingleItem from "./ProductSingleItem";

function Products() {
  const { products } = db || {};
  return (
    <section className="px-6 lg:px-28 2xl:px-32 pt-10 md:pt-20 ">
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
            1200: {
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
            <span class="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Products;
