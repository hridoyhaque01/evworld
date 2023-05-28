import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import getData from "../../../utils/getData.json";
import ProductSingleItem from "./ProductSingleItem";

function Products() {
  const { shopProducts } = getData || {};

  const sliceProducts = shopProducts?.slice(1, 4);

  return (
    <section className="px-6 pt-10 pb-20 lg:py-20">
      <div className="max-w-[1180px] mx-auto">
        <h1 className="text-base md:text-4xl lg:text-6xl text-primaryColor font-clashBold text-center uppercase">
          Featured Products
        </h1>

        <div className="mt-4 lg:mt-20">
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
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {sliceProducts?.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductSingleItem details={product}></ProductSingleItem>
              </SwiperSlide>
            ))}
          </Swiper>
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
      </div>
    </section>
  );
}

export default Products;
