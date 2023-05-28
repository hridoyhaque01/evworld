import React from "react";

function ContactDetails() {
  return (
    <section className="px-6 text-pureWhite mt-10 md:mt-20">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 lg:gap-6">
          {/* single item  */}
          <div className="bg-navySemi p-6 rounded-3xl text-center w-full max-w-sm mx-auto">
            <div>
              <span class="material-symbols-outlined text-3xl">
                location_on
              </span>
            </div>
            <h4 className="text-xl font-medium text-primaryColor capitalize mt-2 mb-4">
              Visit Us
            </h4>
            <p className="text-base lg:text-xl">
              2927 Watson LaneAsheville, NC 28801
            </p>
          </div>

          {/* single item  */}

          <div className="bg-navySemi p-6 rounded-3xl text-center w-full max-w-sm mx-auto">
            <div>
              <span class="material-symbols-outlined text-3xl">call</span>
            </div>
            <h4 className="text-xl font-medium text-primaryColor capitalize mt-2 mb-4">
              call Us
            </h4>
            <p className="text-base lg:text-xl">Tel : +1 715-304-0320 </p>
            <p className="text-base lg:text-xl">Mob : +1 828-921-3496 </p>
          </div>

          {/* single item  */}

          <div className="bg-navySemi p-6 rounded-3xl text-center w-full max-w-sm mx-auto">
            <div>
              <span class="material-symbols-outlined text-3xl">mail</span>
            </div>
            <h4 className="text-xl font-medium text-primaryColor capitalize mt-2 mb-4">
              Mail address
            </h4>
            <p className="text-base lg:text-xl">info @evdomain.com</p>
            <p className="text-base lg:text-xl">domain @company.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
