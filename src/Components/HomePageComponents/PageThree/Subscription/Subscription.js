import React from "react";

function Subscription() {
  return (
    <section className="bg-primaryColor p-6 lg:px-28 2xl:px-32 md:py-12 xl:py-20">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="">
          <h2 className="text-2xl md:text-3xl font-clashSemi text-pureBlack text-center md:text-left">
            Subscribe To Our <br className="hidden md:block" /> Newsletter
          </h2>
        </div>
        <form action="#" className="md:flex-1">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex flex-col md:flex-row xl:flex-1 gap-6">
              <input
                type="email"
                placeholder="Your Name*"
                className="w-full px-4 py-4  border border-whiteSemi outline-none rounded-full"
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full px-4 py-4  border border-whiteSemi outline-none rounded-full"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-base font-clashSemi bg-pureBlack text-pureWhite uppercase py-4 px-8 rounded-full"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Subscription;

// <div className="">
//
//             </div>
//             <div className="">
//               <input
//                 type="email"
//                 placeholder="Your Email*"
//                 className="w-full px-4 py-4  border border-whiteSemi outline-none rounded-full"
//               />
//             </div>
//
