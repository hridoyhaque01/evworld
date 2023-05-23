import React from "react";
import { carRoad, customer, plant, station } from "../../../Assets/getImages";
import AnalyticsSingleItem from "./AnalyticsSingleItem";

function Analytics() {
  return (
    <section className="px-6 lg:px-28 2xl:px-32 pt-10 sm:pt-20">
      <div className="grid grid-cols-4 gap-x-4 sm:gap-x-6">
        <AnalyticsSingleItem
          image={station}
          suffix="k"
          count="40"
          title="Charging Stations"
        ></AnalyticsSingleItem>
        <AnalyticsSingleItem
          image={customer}
          suffix="M"
          count="1600"
          title="Business Customers"
        ></AnalyticsSingleItem>
        <AnalyticsSingleItem
          image={plant}
          suffix="k"
          count="300"
          title="Trees Planted"
        ></AnalyticsSingleItem>
        <AnalyticsSingleItem
          image={carRoad}
          suffix="M+"
          count="3"
          title="Cars On Road"
        ></AnalyticsSingleItem>
      </div>
    </section>
  );
}

export default Analytics;
