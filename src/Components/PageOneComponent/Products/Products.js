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
    <section className="px-6 lg:px-28 2xl:px-32 sm:pt-10 md:pt-20 ">
      <SectionTitle
        title="Featured Products"
        texts="Our team of experts is dedicated to bringing you the best in electric mobility."
      ></SectionTitle>

      <div className="mt-10 md:mt-20 gap-6 md:gap-10 grid grid-cols-3 items-start sm:items-center ">
        <ProductSingleItem
          image={productCharging}
          title="Home Charging"
        ></ProductSingleItem>
        <ProductSingleItem image={productCar} title="Cars"></ProductSingleItem>
        <ProductSingleItem
          image={productStation}
          title="Charging Station"
        ></ProductSingleItem>
      </div>
    </section>
  );
}

export default Products;
