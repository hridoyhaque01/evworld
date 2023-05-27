import React from "react";
import getData from "../../../utils/getData.json";
import ServiceSingletem from "./ServiceSingletem";

function ServiceLists() {
  const { services } = getData || {};
  return (
    <section className="px-6 pt-20">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 text-pureWhite">
          {services?.map((service) => (
            <ServiceSingletem
              key={service?.id}
              id={service?.id}
              title={service?.title}
              image={service?.image}
            ></ServiceSingletem>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceLists;
