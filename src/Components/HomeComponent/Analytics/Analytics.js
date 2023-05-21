import React from "react";
import { station, carRoad, customer, plant } from "../../../Assets/getImages";
import AnalyticsSingleItem from "./AnalyticsSingleItem";

function Analytics() {
  return (
    <section className="bg-analyticsBg py-14 px-6">
      <div className="">
        <div className="grid grid-cols-4 justify-between  gap-x-4">
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
      </div>
    </section>
  );
}

export default Analytics;
