import React from "react";
import { useInView } from "react-intersection-observer";
import { analyticsData } from "../../data/db";
import AnaLyticsItem from "./AnaLyticsItem";

export default function Analytics() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="analytics-bg analytics" ref={ref}>
      <div className="container">
        <div className="row gx-1">
          {analyticsData?.map((item) => {
            const { id, icon, value, suffix, name } = item || {};
            return (
              <AnaLyticsItem
                key={id}
                icon={icon}
                value={value}
                suffix={suffix}
                name={name}
                inView={inView}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
