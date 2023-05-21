import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import {
  productCar,
  productCharging,
  productStation,
} from "../../../Assets/getImages";
import ProductSingleItem from "./ProductSingleItem";

function Products() {
  return (
    <section className="py-10  sm:pt-10 sm:pb-20 md:pt-20 md:pb-24 lg:py-28">
      <div className="w-10/12 mx-auto">
        <SectionTitle
          title="Featured Products"
          texts="Our team of experts is dedicated to bringing you the best in electric mobility."
        ></SectionTitle>

        <div className="mt-10 md:mt-20 grid grid-cols-3 items-start sm:items-center md:gap-6">
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
