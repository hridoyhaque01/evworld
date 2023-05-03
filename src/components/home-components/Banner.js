import React from "react";

const bannerContnet = [
  {
    id: 1,
    ammount: 200,
    name: "mph",
    value: "Top Speed",
  },

  {
    id: 2,
    ammount: 1.99,
    name: "sec",
    value: "0-60 mph*",
  },
  {
    id: 3,
    ammount: 460,
    name: "mi",
    value: "Range",
  },
];

export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-content banner-bg d-flex justify-content-center align-items-center">
          {/* car info  */}

          <div className="d-flex flex-column gap-y-4 car-info">
            {bannerContnet.map((item) => {
              const { id, ammount, name, value } = item || {};

              return (
                <div
                  className="single-info d-flex align-items-start gap-x-1"
                  key={id}
                >
                  <h2>{ammount}</h2>
                  <div className="d-flex flex-column flex-column-reverse">
                    <span>{name}</span>
                    <span>{value}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* banner title  */}
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="text-center banner-title">
                <h1>Drive beyond</h1>
                <p>
                  We believe that a greener future is possible, and we are
                  committed to making it a reality.
                </p>
                <button type="button" className="common-btn acc-btn">
                  Find Station
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
