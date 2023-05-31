import React from "react";

function Description() {
  return (
    <section className="pt-10 md:pt-20 lg:pt-36 text-pureWhite">
      <div className="border-b border-b-blackFadeDark pb-6">
        <nav className="flex gap-6" aria-label="Tabs" role="tablist">
          <button
            type="button"
            className="text-2xl font-normal hs-tab-active:font-bold hs-tab-active:text-primaryColor active"
            data-hs-tab="#tabs-with-underline-1"
            aria-controls="tabs-with-underline-1"
          >
            Description
          </button>
          <button
            type="button"
            className="text-2xl font-normal hs-tab-active:font-semibold hs-tab-active:text-primaryColor"
            data-hs-tab="#tabs-with-underline-2"
            aria-controls="tabs-with-underline-2"
          >
            Reviews(0)
          </button>
        </nav>
      </div>

      <div className="mt-3">
        <div id="tabs-with-underline-1" role="tabpanel">
          <div>
            <h4 className="text-base font-bold mb-4">Description</h4>
            <p>
              The EVX1 is an all-electric car designed for environmentally
              conscious drivers who want a clean, efficient, and sustainable
              driving experience. Equipped with advanced features and
              cutting-edge technology, the EVX1 offers an exciting driving
              experience that is both eco-friendly and practical.
            </p>
            <p>Product Features:</p>
            <ul className="list-disc pl-4">
              <li>Instant torque from electric motor for quick acceleration</li>
              <li>
                Zero emissions while driving for minimal environmental impact
              </li>
              <li>
                Touchscreen infotainment system with Apple CarPlay and Android
                Auto
              </li>
              <li>
                Regenerative braking for efficient energy use and increased
                range
              </li>
              <li>
                Multiple airbags, electronic stability control, and anti-lock
                brakes for safety
              </li>
              <li>
                Alloy wheels with low-rolling resistance tires for improved
                energy efficiency
              </li>
              <li>DC fast charging support for quick charging on the go</li>
            </ul>
            <p>Product Specifications:</p>
            <ul className="list-disc pl-4">
              <li>Motor Power: 200 horsepower</li>
              <li>Torque: 350 Nm</li>
              <li>Battery Capacity: 75 kWh</li>
              <li>Range: Up to 300 miles on a single charge</li>
              <li>
                Charging Time: Approximately 7 hours with Level 2 charger, 80%
                charge in 30 minutes with DC fast charger
              </li>
            </ul>
            <p>Product Benefits:</p>
            <ul className="list-disc pl-4">
              <li>
                Lower operating costs compared to traditional gas-powered cars
              </li>
              <li>Reduced environmental impact with zero emissions</li>
              <li>
                Quieter and smoother driving experience with no engine noise or
                vibration
              </li>
              <li>Improved energy efficiency for lower carbon footprint</li>
              <li>
                Long range and fast charging options for convenience and
                flexibility
              </li>
            </ul>
            <p>
              Experience the future of driving with the EVX1 - the electric car
              designed for a better tomorrow.
            </p>
          </div>
        </div>
        <div id="tabs-with-underline-2" className="hidden" role="tabpanel">
          <div>
            <h4 className="text-base font-bold mb-4">Reviews</h4>
            <p>
              The EVX1 is an all-electric car designed for environmentally
              conscious drivers who want a clean, efficient, and sustainable
              driving experience. Equipped with advanced features and
              cutting-edge technology, the EVX1 offers an exciting driving
              experience that is both eco-friendly and practical.
            </p>
            <p>Product Features:</p>
            <ul className="list-disc pl-4">
              <li>Instant torque from electric motor for quick acceleration</li>
              <li>
                Zero emissions while driving for minimal environmental impact
              </li>
              <li>
                Touchscreen infotainment system with Apple CarPlay and Android
                Auto
              </li>
              <li>
                Regenerative braking for efficient energy use and increased
                range
              </li>
              <li>
                Multiple airbags, electronic stability control, and anti-lock
                brakes for safety
              </li>
              <li>
                Alloy wheels with low-rolling resistance tires for improved
                energy efficiency
              </li>
              <li>DC fast charging support for quick charging on the go</li>
            </ul>
            <p>Product Specifications:</p>
            <ul className="list-disc pl-4">
              <li>Motor Power: 200 horsepower</li>
              <li>Torque: 350 Nm</li>
              <li>Battery Capacity: 75 kWh</li>
              <li>Range: Up to 300 miles on a single charge</li>
              <li>
                Charging Time: Approximately 7 hours with Level 2 charger, 80%
                charge in 30 minutes with DC fast charger
              </li>
            </ul>
            <p>Product Benefits:</p>
            <ul className="list-disc pl-4">
              <li>
                Lower operating costs compared to traditional gas-powered cars
              </li>
              <li>Reduced environmental impact with zero emissions</li>
              <li>
                Quieter and smoother driving experience with no engine noise or
                vibration
              </li>
              <li>Improved energy efficiency for lower carbon footprint</li>
              <li>
                Long range and fast charging options for convenience and
                flexibility
              </li>
            </ul>
            <p>
              Experience the future of driving with the EVX1 - the electric car
              designed for a better tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
