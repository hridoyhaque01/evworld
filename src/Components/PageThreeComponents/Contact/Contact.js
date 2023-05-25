import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import FAQ from "./FAQ";

function Contact() {
  return (
    <section className="px-6 lg:px-28 2xl:px-32 pt-10 md:pt-20 xl:pt-28">
      <div className="">
        <SectionTitle
          title="Get in Touch"
          texts="Have a question about our products or services? Want to learn more about electric mobility? Contact us today to speak with one of our experts."
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-7 items-start mt-4 md:mt-16 xl:mt-20 gap-8 md:gap-8 xl:gap-10">
          <div className="md:col-span-4">
            <FAQ></FAQ>
          </div>
          <div className="md:col-span-3 bg-pureWhite shadow-md p-8 xl:p-10 flex flex-col justify-center gap-10">
            <div className="py-3 w-full text-center text-2xl xl:text-3xl font-bold  bg-primaryColor text-navyDark">
              GET IN TOUCH
            </div>
            <form action="" className="flex flex-col gap-4">
              <div className="">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 xl:py-4 bg-whiteGray  outline-none"
                />
              </div>
              <div className="">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 xl:py-4 bg-whiteGray  outline-none"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 xl:py-4 bg-whiteGray  outline-none"
                />
              </div>
              <div className="">
                <textarea
                  type="text"
                  placeholder="Write your message"
                  className="w-full px-4 py-3 h-24 resize-none bg-whiteGray  outline-none"
                ></textarea>
              </div>
              <div className="mt-4 md:mt-8 text-center">
                <button className="text-blackFadeDark text-base font-bold px-6 py-3 md:py-4 md:text-2xl bg-primaryColor uppercase">
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
