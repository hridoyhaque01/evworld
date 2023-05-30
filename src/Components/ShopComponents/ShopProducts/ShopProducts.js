import { RangeSlider, ReactiveBase } from "@appbaseio/reactivesearch";
import React, { useState } from "react";
import getData from "../../../utils/getData.json";
import ShopProductSingleItem from "./ShopProductSingleItem";

function ShopProducts() {
  const { shopProducts } = getData || {};
  const [showFilter, setShowFilter] = useState(false);

  const [rangeValues, setRangeValues] = useState([25, 75]);

  const handleRangeChange = (index, value) => {
    const newRangeValues = [...rangeValues];
    newRangeValues[index] = value;
    setRangeValues(newRangeValues);
  };

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
            <div className="relative w-full">
              <select
                defaultValue="Default"
                className="w-full  p-4 bg-navySemi  rounded-lg  outline-none appearance-none"
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
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
            <div className="relative inline-flex">
              <button
                type="button"
                className=" bg-navySemi rounded-lg px-4 flex items-center justify-center"
                onClick={() => setShowFilter(true)}
              >
                <span className="material-symbols-outlined">tune</span>
              </button>
              {showFilter && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-navyDark opacity-70 z-10"></div>
              )}

              <div
                className={`absolute top-20 right-0 w-[300px] sm:w-[500px] bg-navySemi shadow-lg p-10 rounded-3xl z-20 duration-300 ${
                  showFilter ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="flex flex-col gap-12">
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-navyFade">
                    <h4>Filter</h4>
                    <button type="button" onClick={() => setShowFilter(false)}>
                      <span class="material-symbols-outlined">close</span>
                    </button>
                  </div>

                  <div className="w-full">
                    <ReactiveBase
                      app="good-books-ds"
                      url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
                    >
                      <div className="row">
                        <div className="col">
                          <RangeSlider
                            dataField="ratings_count"
                            componentId="BookSensor"
                            range={{
                              start: 3000,
                              end: 50000,
                            }}
                            rangeLabels={{
                              start: "3K",
                              end: "50K",
                            }}
                          />
                        </div>
                      </div>
                    </ReactiveBase>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold">Filter by Color</h4>
                    <ul className="flex flex-col gap-4 mt-6">
                      <li className="flex items-center gap-2 text-base capitalize">
                        <input
                          type="checkbox"
                          id=""
                          className="w-4 h-4 accent-primaryColor"
                        />
                        <label htmlFor="">black</label>
                      </li>
                      <li className="flex items-center gap-2 text-base capitalize">
                        <input
                          type="checkbox"
                          id=""
                          className="w-4 h-4 accent-primaryColor"
                        />
                        <label htmlFor="">Blue</label>
                      </li>
                      <li className="flex items-center gap-2 text-base capitalize">
                        <input
                          type="checkbox"
                          id=""
                          className="w-4 h-4 accent-primaryColor"
                        />
                        <label htmlFor="">Dark Grey</label>
                      </li>
                      <li className="flex items-center gap-2 text-base capitalize">
                        <input
                          type="checkbox"
                          id=""
                          className="w-4 h-4 accent-primaryColor"
                        />
                        <label htmlFor="">Pink</label>
                      </li>
                      <li className="flex items-center gap-2 text-base capitalize">
                        <input
                          type="checkbox"
                          id=""
                          className="w-4 h-4 accent-primaryColor"
                        />
                        <label htmlFor="">Green</label>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">Filter by Color</h4>
                    <ul className="flex flex-col gap-4 mt-6">
                      <li className="flex items-center gap-2 text-base capitalize">
                        <input
                          type="checkbox"
                          id=""
                          className="w-4 h-4 accent-primaryColor"
                        />
                        <label htmlFor="">Car</label>
                      </li>
                      <li className="flex items-center gap-2 text-base capitalize">
                        <input
                          type="checkbox"
                          id=""
                          className="w-4 h-4 accent-primaryColor"
                        />
                        <label htmlFor="">Charger for Commercial</label>
                      </li>
                      <li className="flex items-center gap-2 text-base capitalize">
                        <input
                          type="checkbox"
                          id=""
                          className="w-4 h-4 accent-primaryColor"
                        />
                        <label htmlFor="">Charger for Home</label>
                      </li>
                      <li className="flex items-center gap-2 text-base capitalize">
                        <input
                          type="checkbox"
                          id=""
                          className="w-4 h-4 accent-primaryColor"
                        />
                        <label htmlFor="">Car Accessories </label>
                      </li>
                      <li className="flex items-center gap-2 text-base capitalize">
                        <input
                          type="checkbox"
                          id=""
                          className="w-4 h-4 accent-primaryColor"
                        />
                        <label htmlFor="">Solar Panel</label>
                      </li>
                      <li className="flex items-center gap-2 text-base capitalize">
                        <input
                          type="checkbox"
                          id=""
                          className="w-4 h-4 accent-primaryColor"
                        />
                        <label htmlFor="">etc</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
