import React from "react";
import getData from "../../../utils/getData.json";
import ShopProductSingleItem from "./ShopProductSingleItem";
// import ShopProductSingleItem from "./ShopProductSingleItem";

function ShopProducts() {
  const { shopProducts } = getData || {};

  return (
    <section className="px-6 py-10 md:py-20 text-pureWhite">
      <div className="max-w-[1180px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <div className="relative flex items-center  bg-navySemi rounded-lg overflow-hidden pr-4">
              <input
                type="text"
                className="w-full outline-none p-4 bg-transparent"
                placeholder="Search"
              />
              <button className="flex items-center">
                <span className="material-symbols-outlined ">search</span>
              </button>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-4"></div>
          <div className="lg:col-span-4 flex gap-6">
            <select
              defaultValue="Default"
              className="w-full bg-navySemi  rounded-lg p-4 outline-none"
            >
              <option value="default" className="p-2">
                Default Sorting
              </option>
              <option value="lowToHigh" className="p-2">
                Price (Low to High)
              </option>
              <option value="highToLow" className="p-2">
                Price (High to Low)
              </option>
              <option value="AToZ" className="p-2">
                Name (A-Z)
              </option>
              <option value="ZToA" className="p-2">
                Name (Z-A)
              </option>
              <option value="lowest" className="p-2">
                Rating (Lowest)
              </option>
              <option value="highest" className="p-2">
                Rating (Highest)
              </option>
            </select>
            <div className="relative inline-flex">
              <button type="button" className=" bg-navySemi p-4 rounded-lg">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>
          </div>
        </div>

        {/* products  */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {shopProducts?.map((product) => (
              <ShopProductSingleItem
                key={product?.id}
                details={product}
              ></ShopProductSingleItem>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <ul className="flex items-center gap-1">
              <li className="mr-5">
                <button className="w-14 h-14 flex items-center justify-center text-blackFadeDark bg-pureWhite rounded-full">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
              </li>
              <li>
                <button className="text-primaryColor text-2xl font-bold">
                  1
                </button>
              </li>
              <li className="text-2xl">.</li>
              <li>
                <button className="text-2xl font-bold">2</button>
              </li>
              <li className="text-2xl">.</li>
              <li>
                <button className="text-2xl font-bold">3</button>
              </li>
              <li className="text-2xl">.</li>
              <li className="text-2xl">.</li>
              <li className="text-2xl">.</li>
              <li className="ml-5">
                <button className="w-14 h-14 flex items-center justify-center text-blackFadeDark bg-pureWhite rounded-full">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopProducts;
