import React from "react";
import {
  productCar,
  productCharging,
  productStation,
} from "../../../utils/getImages";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import ProductSingleItem from "./ProductSingleItem";

function Products() {
  return (
    <section className="px-6 sm:pt-10 md:pt-20 ">
      <div className="max-w-[1180px] mx-auto">
        <SectionTitle
          title="Featured Products"
          texts="Our team of experts is dedicated to bringing you the best in electric mobility."
        ></SectionTitle>

        <div className="mt-10 md:mt-20 gap-6 md:gap-10 grid grid-cols-3 items-start sm:items-center ">
          <ProductSingleItem
            image={productCharging}
            title="Home Charging"
          ></ProductSingleItem>
          <ProductSingleItem
            image={productCar}
            title="Cars"
          ></ProductSingleItem>
          <ProductSingleItem
            image={productStation}
            title="Charging Station"
          ></ProductSingleItem>
        </div>
      </div>
    </section>
  );
}

export default Products;
