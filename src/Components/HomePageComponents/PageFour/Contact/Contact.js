import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import FAQ from "./FAQ";

function Contact() {
  return (
    <section className="px-6 pt-10 md:pt-20 xl:pt-28">
      <div className="max-w-[1180px] mx-auto">
        <SectionTitle
          title="Get in Touch"
          texts="Have a question about our products or services? Want to learn more about electric mobility? Contact us today to speak with one of our experts."
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-7 items-start mt-4 md:mt-16 xl:mt-20 gap-2 md:gap-8 xl:gap-10">
          <div className="md:col-span-4">
            <FAQ></FAQ>
          </div>
          <div className="md:col-span-3 bg-pureWhite shadow-md p-8 xl:p-10 flex flex-col justify-center gap-10">
            <div className=" w-full text-center text-2xl xl:text-3xl font-bold  text-navyDark">
              GET IN TOUCH
            </div>
            <form action="" className="flex flex-col gap-4">
              <div className="">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 xl:py-4 border border-whiteSemi outline-none rounded-full"
                />
              </div>
              <div className="">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 xl:py-4 border border-whiteSemi outline-none rounded-full"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 xl:py-4 border border-whiteSemi outline-none rounded-full"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Write your message"
                  className="w-full px-4 py-3 xl:py-4 border border-whiteSemi outline-none rounded-full"
                />
              </div>
              <div className="mt-4 md:mt-8 text-center">
                <button className="text-blackFadeDark text-base lg:text-2xl font-bold px-8 py-4 md:py-4 md:text-2xl bg-primaryColor uppercase rounded-full">
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
