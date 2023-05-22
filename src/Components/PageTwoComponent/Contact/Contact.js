import React, { useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

function Contact() {
  const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <section className="px-6 lg:px-28 2xl:px-32 pt-10 md:pt-20 xl:pt-28">
      <div className="">
        <SectionTitle
          title="Get in Touch"
          texts="Have a question about our products or services? Want to learn more about electric mobility? Contact us today to speak with one of our experts."
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-7 items-start mt-4 md:mt-16 xl:mt-20 gap-2 md:gap-10">
          <div className="md:col-span-4">
            <div className="hs-accordion-group flex flex-col gap-4">
              <div className="hs-accordion shadow-md">
                <button
                  className="hs-accordion-toggle group p-4 flex justify-between items-center gap-x-3 w-full font-semibold text-left transition "
                  aria-controls=""
                >
                  Accordion #1
                  <span className="material-symbols-outlined hs-accordion-active:rotate-180 duration-300">
                    expand_more
                  </span>
                </button>
                <div className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300">
                  <p className="bg-whiteLowLight p-4 m-4">
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div className="hs-accordion shadow-md">
                <button
                  className="hs-accordion-toggle group p-4 flex justify-between items-center gap-x-3 w-full font-semibold text-left transition "
                  aria-controls=""
                >
                  Accordion #1
                  <span className="material-symbols-outlined hs-accordion-active:rotate-180 duration-300">
                    expand_more
                  </span>
                </button>
                <div className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300">
                  <p className="bg-whiteLowLight p-4 m-4">
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div className="hs-accordion shadow-md">
                <button
                  className="hs-accordion-toggle group p-4 flex justify-between items-center gap-x-3 w-full font-semibold text-left transition "
                  aria-controls=""
                >
                  Accordion #1
                  <span className="material-symbols-outlined hs-accordion-active:rotate-180 duration-300">
                    expand_more
                  </span>
                </button>
                <div className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300">
                  <p className="bg-whiteLowLight p-4 m-4">
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 bg-pureWhite shadow-md p-8 xl:p-10 flex flex-col justify-center gap-10">
            <div className="py-3 px-6 text-center text-2xl font-bold  bg-primaryColor text-navyDark">
              GET IN TOUCH
            </div>
            <form action="" className="flex flex-col gap-1 md:gap-4">
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
