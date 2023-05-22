import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import db from "../../../Assets/db.json";
import NewsSingleItem from "./NewsSingleItem";
import { Swiper, SwiperSlide } from "swiper/react";

function News() {
  const { news } = db || {};
  return (
    <section className="px-6 lg:px-28 2xl:px-32 mx-auto pt-10 md:pt-20 xl:pt-28">
      <div>
        <SectionTitle
          title="News and Insights"
          texts="Stay up-to-date on the latest news and insights from the world of electric mobility with our blog. From industry trends to product announcements, we've got you covered."
        ></SectionTitle>

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
            {news?.map((newsItem) => (
              <SwiperSlide key={newsItem.id}>
                <NewsSingleItem details={newsItem}></NewsSingleItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default News;
