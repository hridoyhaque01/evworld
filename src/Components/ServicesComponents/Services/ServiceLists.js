import React from "react";
import getData from "../../../utils/getData.json";
import ServiceSingletem from "./ServiceSingletem";

function ServiceLists() {
  const { services } = getData || {};
  return (
    <section className="pt-20">
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
    </section>
  );
}

export default ServiceLists;
