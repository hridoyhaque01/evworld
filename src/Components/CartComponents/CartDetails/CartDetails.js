import React, { useState } from "react";
import { Link } from "react-router-dom";
import { shopCarOne } from "../../../utils/getImages";

function CartDetails() {
  const [cartValue, setCartValue] = useState(1);
  const [isApplied, setIsApplied] = useState(false);

  const handleCartChange = (value) => {
    if (Number(value) === 0) {
      return;
    }
    setCartValue(Number(value));
  };

  const increaseCartValue = () => {
    setCartValue((prev) => prev + 1);
  };
  const deincreaseCartValue = () => {
    setCartValue((prev) => prev - 1);
  };
  return (
    <section className="pt-10 pb-20 md:py-20 lg:pt-20 lg:pb-36 text-pureWhite text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 md:col-span-2">
          <div className="p-2 md:p-6 bg-navySemi rounded-3xl">
            <table className="table-auto w-full  ">
              <thead className="">
                <tr className="text-sm md:text-xl font-medium capitalize ">
                  <th className="py-4"></th>
                  <th className="py-4">Product</th>
                  <th className="py-4">Price</th>
                  <th className="py-4">Quantity</th>
                  <th className="py-4">Subtotal</th>
                  <th className="py-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-xs md:text-base">
                  <td className="py-4">
                    <div className=" max-w-[70px]">
                      <img src={shopCarOne} alt="" className="" />
                    </div>
                  </td>
                  <td className="py-4">car</td>
                  <td className="text-primaryColor py-4">$40,000</td>
                  <td className="py-4">
                    <div className="flex items-center justify-center">
                      <input
                        type="number"
                        className="w-full max-w-[50px] outline-none bg-transparent appearance-none [&::--moz-webkit-inner-spin-button]:appearance-none text-center"
                        value={cartValue}
                        style={{
                          MozAppearance: "textfield",
                          "::-webkit-outer-spin-button": { opacity: 0 },
                          "::-webkit-inner-spin-button": { opacity: 0 },
                          "::-moz-appearance": "textfield",
                        }}
                        onChange={(e) => handleCartChange(e.target.value)}
                      />
                      <div className="flex flex-col">
                        <button type="button" onClick={increaseCartValue}>
                          <span className="material-symbols-outlined text-xs">
                            expand_less
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={deincreaseCartValue}
                          disabled={cartValue === 1 ? true : false}
                          className={cartValue === 1 && "text-whiteFade"}
                        >
                          <span className="material-symbols-outlined text-xs">
                            expand_more
                          </span>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">$40,000</td>
                  <th>
                    <button type="button">
                      <span className="material-symbols-outlined text-errorColor">
                        close
                      </span>
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <form action="#">
            <div className="flex items-center gap-6 text-sm md:text-base font-medium">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-full py-4 px-6 bg-navySemi rounded-full outline-none"
                />
              </div>
              <div className="h-full">
                {!isApplied ? (
                  <button
                    type="submit"
                    className="text-blackFadeDark  md:font-bold bg-primaryColor h-full  px-6 py-4 rounded-full"
                    onClick={() => setIsApplied(true)}
                  >
                    Apply Coupon
                  </button>
                ) : (
                  <div className="flex items-center gap-2 text-successColor">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    <span>Applied</span>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="capitalize text-pureWhite bg-navySemi rounded-3xl p-6 flex flex-col gap-8 text-base">
          <h4 className=" text-xl font-medium">cart totals</h4>
          <table className=" w-full text-start ">
            <tbody className="w-full">
              <tr className="border-b border-blackFadeDark py-3">
                <td className="py-3 text-blackLow">subtotal</td>
                <td className="py-3">$40,000</td>
              </tr>
              <tr>
                <td className="py-3 text-blackLow">total</td>
                <td className="py-3">$40,000</td>
              </tr>
            </tbody>
          </table>
          <div className="">
            <Link
              to="/checkout"
              className="md:text-xs lg:text-base text-blackFadeDark block bg-primaryColor md:font-bold w-full text-center py-4 rounded-full"
            >
              Proceed to CheckOut
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartDetails;
