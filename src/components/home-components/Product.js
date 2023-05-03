import React from "react";
import Title from "../Title";

// images

import {} from "../../assets/images/Images";
import { products } from "../../data/db";
import ProductItem from "./ProductItem";

export default function Product() {
  return (
    <section className="common-sec">
      <div className="container">
        <Title
          title="Featured Products"
          text="Our team of experts is dedicated to bringing you the best in electric mobility."
        />

        {/* product start  */}
        <div className="d-flex justify-content-evenly align-items-center product-content">
          {products?.map((product) => {
            const { id, image, imgClass, title } = product || {};
            return (
              <ProductItem
                key={id}
                image={image}
                imgClass={imgClass}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
