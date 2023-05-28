import React, { useState } from "react";
import { shopCar, shopCarOne } from "../../../utils/getImages";

function ShopProductDetails() {
  const [cartValue, setCartValue] = useState(1);

  const handleCartChange = (value) => {
    setCartValue(Number(value));
  };

  const increaseCartValue = () => {
    setCartValue((prev) => prev + 1);
  };
  const deincreaseCartValue = () => {
    setCartValue((prev) => prev - 1);
  };

  return (
    <section className="px-4 pt-10 md:pt-20 text-pureWhite">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-x-6 xl:gap-x-32 items-start">
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="bg-primaryColor rounded-2xl overflow-hidden">
              <img src={shopCar} alt="" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-navySemi rounded-lg cursor-pointer">
                <img src={shopCarOne} alt="" className="w-full" />
              </div>
              <div className="bg-navySemi rounded-lg cursor-pointer">
                <img src={shopCarOne} alt="" className="w-full" />
              </div>
              <div className="bg-navySemi rounded-lg cursor-pointer">
                <img src={shopCarOne} alt="" className="w-full" />
              </div>
              <div className="bg-navySemi rounded-lg cursor-pointer">
                <img src={shopCarOne} alt="" className="w-full" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-clashBold uppercase">
              Car name Series Model
            </h2>
            <h4 className="text-2xl md:text-5xl font-clashBold text-primaryColor my-2 md:my-6">
              $40000.00
            </h4>
            <div className="flex items-center gap-6">
              <button className=" md:text-xl lg:text-2xl font-bold text-blackFadeDark py-4 lg:py-5 px-8 rounded-full bg-primaryColor">
                Add to cart
              </button>
              <div className=" flex items-center">
                <input
                  type="number"
                  className="w-24 p-4 lg:p-5 rounded-full bg-navySemi outline-none  [&::-webkit-inner-spin-button]:appearance-none text-center"
                  value={cartValue}
                  onChange={(e) => handleCartChange(e.target.value)}
                />
                <div className="flex flex-col">
                  <button type="button" onClick={increaseCartValue}>
                    <span class="material-symbols-outlined text-base">
                      expand_less
                    </span>
                  </button>
                  <button type="button" onClick={deincreaseCartValue}>
                    <span class="material-symbols-outlined text-base">
                      expand_more
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-6">
              <button
                type="button"
                className="flex items-center py-2 px-4 bg-navySemi rounded-full"
              >
                <span class="material-symbols-outlined">location_on</span>{" "}
                <span className="md:text-xs lg:text-base">
                  Select delivery location
                </span>
              </button>
              <h4 className="text-base">
                Delivery Fee: <span className="font-bold">$1000.00</span>
              </h4>
            </div>
            <p className="mt-6 md:mt-20">
              The EVX1 is a sustainable and practical electric car that offers a
              thrilling driving experience without compromising on performance
              or features. This eco-friendly vehicle is designed for
              environmentally conscious drivers who want a clean and efficient
              driving experience. Equipped with advanced features and
              cutting-edge technology, the EVX1 delivers quick and smooth
              acceleration, making it perfect for city driving. Its low-rolling
              resistance tires and regenerative braking system maximize energy
              efficiency and range. The car's spacious and comfortable interior,
              along with a range of features such as a touchscreen infotainment
              system, rearview camera, and premium sound system, ensure a
              luxurious and enjoyable ride. With Level 2 charging, the EVX1 can
              be charged in just a few hours and also supports DC fast charging
              for quick top-ups on the go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopProductDetails;
