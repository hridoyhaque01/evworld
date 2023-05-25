import React from "react";
import { contact } from "../../../Assets/getImages";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

function Contact() {
  return (
    <section className="px-6 pt-10 md:pt-20 xl:pt-28">
      <div className="max-w-[1180px] mx-auto">
        <SectionTitle
          title="Get in Touch"
          texts="Have a question about our products or services? Want to learn more about electric mobility? Contact us today to speak with one of our experts."
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-7 mt-4 md:mt-16 xl:mt-20 gap-2 bg-navySemi p-4 md:p-10 md:gap-10 rounded-2xl">
          <div className="md:col-span-3">
            <img
              src={contact}
              alt="contact"
              className="h-full max-h-[487px] w-full"
            />
          </div>
          <div className="md:col-span-4 ">
            <form action="" className="flex flex-col gap-1 md:gap-2">
              <div className="">
                <label
                  htmlFor=""
                  className="text-whiteFade text-xs md:text-sm lg:text-lg capitalize"
                >
                  name <span className="text-errorColor">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-whiteGray rounded-lg outline-none"
                />
              </div>
              <div className="">
                <label
                  htmlFor=""
                  className="text-whiteFade text-xs md:text-sm lg:text-lg capitalize"
                >
                  email <span className="text-errorColor">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-whiteGray rounded-lg outline-none"
                />
              </div>
              <div className="">
                <label
                  htmlFor=""
                  className="text-whiteFade text-xs md:text-sm lg:text-lg capitalize"
                >
                  subject <span className="text-errorColor">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-whiteGray rounded-lg outline-none"
                />
              </div>
              <div className="">
                <label
                  htmlFor=""
                  className="text-whiteFade text-xs md:text-sm lg:text-lg capitalize"
                >
                  message <span className="text-errorColor">*</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Write your message"
                  className="w-full px-4 py-3 h-24 resize-none bg-whiteGray rounded-lg outline-none"
                ></textarea>
              </div>
              <div className="mt-4 md:mt-8">
                <button className="text-blackFadeDark text-base font-bold w-full py-3 md:py-4 md:text-2xl bg-primaryColor rounded-lg capitalize">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
