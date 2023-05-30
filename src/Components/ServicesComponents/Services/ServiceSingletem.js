import React from "react";
import { Link } from "react-router-dom";

function ServiceSingletem({ image, title, id }) {
  return (
    <Link
      to={`/service-details/${id}`}
      className="flex flex-col gap-6 p-6 rounded-2xl bg-navySemi"
    >
      <div>
        <img src={image} alt="" className="mx-auto" />
      </div>
      <h2 className="text-center text-base lg:text-3xl font-clashSemi uppercase">
        {title}
      </h2>
    </Link>
  );
}

export default ServiceSingletem;
