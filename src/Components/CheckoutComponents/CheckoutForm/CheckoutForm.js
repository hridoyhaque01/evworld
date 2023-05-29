import React, { useState } from "react";
import { circle, mastercard, paypal } from "../../../utils/getImages";

function CheckoutForm() {
  const [isSelectedMethod, setIsSelectedMethod] = useState("paypal");

  return (
    <section className="px-6 pt-10 pb-20 md:py-20 lg:pt-20 lg:pb-36">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-navySemi py-6 px-4 md:py-14 md:px-6 rounded-3xl text-sm text-whiteFade lg:col-span-2">
            <h2 className="text-3xl font-clashSemi text-pureWhite">
              Billing Details
            </h2>
            <form action="" className="mt-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-full">
                    <input
                      type="text"
                      className="w-full bg-navyDark placeholder:text-whiteFade py-5 px-4 rounded-full outline-none"
                      name="name"
                      placeholder="First Name *"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      className="w-full bg-navyDark placeholder:text-whiteFade py-5 px-4 rounded-full outline-none"
                      name="name"
                      placeholder="Last Name *"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full bg-navyDark placeholder:text-whiteFade py-5 px-4 rounded-full outline-none"
                    name="name"
                    placeholder="Company Name (optional)"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full bg-navyDark placeholder:text-whiteFade py-5 px-4 rounded-full outline-none"
                    name="name"
                    placeholder="Phone  *"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full bg-navyDark placeholder:text-whiteFade py-5 px-4 rounded-full outline-none"
                    name="name"
                    placeholder="Email Address  *"
                  />
                </div>

                <div className="relative">
                  <select
                    className="pl-8 pr-2 w-full py-5 px-4 bg-navyDark appearance-none rounded-full outline-none "
                    defaultValue="Country / Region *"
                  >
                    <option
                      value="Country / Region *"
                      disabled
                      className="text-"
                    >
                      Country / Region *
                    </option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Japan">Japan</option>
                    <option value="France">France</option>
                    <option value="India">India</option>
                    <option value="Mexico">Mexico</option>
                    <option value="South Africa">South Africa</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <select
                    className="pl-8 pr-2 w-full py-5 px-4 bg-navyDark appearance-none rounded-full outline-none "
                    defaultValue="Town / City *"
                  >
                    <option value="Town / City *" disabled className="text-">
                      Town / City *
                    </option>
                    <option value="London, United Kingdom">
                      London, United Kingdom
                    </option>
                    <option value="New York City, United States">
                      New York City, United States
                    </option>
                    <option value="Tokyo, Japan">Tokyo, Japan</option>
                    <option value="Paris, France">Paris, France</option>
                    <option value="Sydney, Australia">Sydney, Australia</option>
                    <option value="Dubai, United Arab Emirates">
                      Dubai, United Arab Emirates
                    </option>
                    <option value="Rio de Janeiro, Brazil">
                      Rio de Janeiro, Brazil
                    </option>
                    <option value="Cape Town, South Africa">
                      Cape Town, South Africa
                    </option>
                    <option value="Mumbai, India">Mumbai, India</option>
                    <option value="Rome, Italy">Rome, Italy</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    className="w-full bg-navyDark placeholder:text-whiteFade py-5 px-4 rounded-full outline-none"
                    name="name"
                    placeholder="Street Address (House number & Street Name) *"
                  />
                </div>

                <div className="relative">
                  <select
                    className="pl-8 pr-2 w-full py-5 px-4 bg-navyDark appearance-none rounded-full outline-none "
                    defaultValue="State *"
                  >
                    <option value="State *" disabled className="text-">
                      State *
                    </option>
                    <option value="London, United Kingdom">
                      London, United Kingdom
                    </option>
                    <option value="New York City, United States">
                      New York City, United States
                    </option>
                    <option value="Tokyo, Japan">Tokyo, Japan</option>
                    <option value="Paris, France">Paris, France</option>
                    <option value="Sydney, Australia">Sydney, Australia</option>
                    <option value="Dubai, United Arab Emirates">
                      Dubai, United Arab Emirates
                    </option>
                    <option value="Rio de Janeiro, Brazil">
                      Rio de Janeiro, Brazil
                    </option>
                    <option value="Cape Town, South Africa">
                      Cape Town, South Africa
                    </option>
                    <option value="Mumbai, India">Mumbai, India</option>
                    <option value="Rome, Italy">Rome, Italy</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <select
                    className="pl-8 pr-2 w-full py-5 px-4 bg-navyDark appearance-none rounded-full outline-none "
                    defaultValue="Zip Code  *"
                  >
                    <option value="Zip Code  *">Zip Code *</option>
                    <option value="10001">10001</option>
                    <option value="23220">23220</option>
                    <option value="33101">33101</option>
                    <option value="10002">10002</option>
                    <option value="11101">11101</option>
                    <option value="20001">20001</option>
                    <option value="32210">32210</option>
                    <option value="10003">10003</option>
                    <option value="11211">11211</option>
                    <option value="11201">11201</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div>
            <div className="capitalize text-pureWhite text-center bg-navySemi rounded-3xl p-6 flex flex-col gap-8 text-base">
              <h4 className=" text-xl font-medium">cart totals</h4>
              <table className=" w-full text-start ">
                <tbody className="w-full">
                  <tr className=" text-blackLow">
                    <td className="py-1 ">product</td>
                    <td className="py-1">price</td>
                  </tr>
                  <tr className="border-b border-navyDark">
                    <td className="pt-1 pb-3">Car x1</td>
                    <td className="pt-1 pb-3">$40,000</td>
                  </tr>
                  <tr className="">
                    <td className="pt-3 pb-1 text-blackLow">Subtotal</td>
                    <td className="pt-3 pb-1">$40,000</td>
                  </tr>
                  <tr className="">
                    <td className="py-1 text-blackLow">Total</td>
                    <td className="py-1 text-primaryColor">$40,000</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-start">
                <h2 className="text-2xl font-bold">pay with</h2>
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="relative">
                    <button
                      className="py-4 px-2 bg-navyDark rounded-xl w-full h-full"
                      onClick={() => setIsSelectedMethod("paypal")}
                    >
                      <img src={paypal} alt="" className="mx-auto" />
                    </button>
                    {isSelectedMethod === "paypal" && (
                      <div className="absolute -right-1 -top-2">
                        <img src={circle} alt="" />
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      className="py-4 px-2 bg-navyDark rounded-xl w-full h-full"
                      onClick={() => setIsSelectedMethod("mastercard")}
                    >
                      <img src={mastercard} alt="" className="mx-auto" />
                    </button>
                    {isSelectedMethod === "mastercard" && (
                      <div className="absolute -right-1 -top-2">
                        <img src={circle} alt="" />
                      </div>
                    )}
                  </div>
                  <button className="py-4 px-2  bg-navyDark rounded-xl flex items-center justify-center sm:gap-1 shrink-0 text-sm ">
                    <span>Other</span>
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutForm;
