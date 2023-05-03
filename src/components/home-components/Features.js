import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import BottomLeftSVG from "../../ui/BottomLeftSVG";
import BottomRightSVG from "../../ui/BottomRightSVG";
import TopLeftSVG from "../../ui/TopLeftSVG";
import TopRightSVG from "../../ui/TopRightSVG";
import Title from "../Title";
import FeatureItem from "./FeatureItem";

import { carSize, feature, safety } from "../../assets/images/Images";
import { featuresLeft, featuresRight } from "../../data/db";
import MIddleLeftSVG from "../../ui/MIddleLeftSVG";
import MiddleRightSVG from "../../ui/MiddleRightSVG";

export default function Features() {
  const { ref, inView } = useInView({
    threshold: 0.5, // when to trigger the intersection observer
  });
  const svgRef = useRef();

  const animateSvg = () => {
    svgRef.current.classList.add("animate-svg");
  };

  useEffect(() => {
    if (inView) {
      animateSvg();
    }
  }, [inView]);

  return (
    <section className="py-5" ref={ref}>
      <div className="container">
        <Title
          title="The Next Generation of Sustainable Driving"
          text="Our electric car is designed to provide a smooth and comfortable ride while"
        >
          <h2>Elvo 465 St Super</h2>
        </Title>

        <div className="feature-content">
          {/* top feature  */}
          <div className="row align-items-end justify-content-between">
            <div className="col-4">
              <FeatureItem
                title="Car Size"
                text="Compact hatchback seats four with 4m length and 1.7m width."
                extraClasses="topLeft pe-lg-5"
                img={carSize}
              >
                <div className="top-shape">
                  <TopLeftSVG svgRef={svgRef} inView={inView} />
                </div>
              </FeatureItem>
            </div>
            <div className="col-4">
              <FeatureItem
                title="Safety"
                text="The car has safety features: ESC, ABS, and airbags."
                extraClasses="topRight reverse ps-lg-5"
                img={safety}
              >
                <div className="top-shape top-right">
                  <TopRightSVG svgRef={svgRef} inView={inView} />
                </div>
              </FeatureItem>
            </div>
          </div>

          {/* middle feature  */}
          <div className="middle-feature">
            <div className="row justify-content-between">
              {/* car left side details  */}

              <div className="col-3">
                <div className="d-flex flex-column justify-content-center middle-features">
                  {featuresLeft?.map((item) => {
                    const { id, title, text, image } = item;
                    return (
                      <FeatureItem
                        title={title}
                        text={text}
                        extraClasses="topLeft pe-md-4 pe-xl-0 pe-xxl-5"
                        img={image}
                        key={id}
                      >
                        <div className="middle-shape">
                          <MIddleLeftSVG svgRef={svgRef} inView={inView} />
                        </div>
                      </FeatureItem>
                    );
                  })}
                </div>
              </div>

              {/* car img  */}

              <div className="col-4">
                <div className="">
                  <img src={feature} alt="feature car" className="img-fluid" />
                </div>
              </div>

              {/* car right side details  */}

              <div className="col-3">
                <div className="d-flex flex-column justify-content-center middle-features">
                  {featuresRight?.map((item) => {
                    const { id, title, text, image } = item;
                    return (
                      <FeatureItem
                        title={title}
                        text={text}
                        extraClasses="topRight reverse ps-md-4 ps-xl-0 ps-xxl-5"
                        img={image}
                        key={id}
                      >
                        <div className="middle-shape">
                          <MiddleRightSVG svgRef={svgRef} inView={inView} />
                        </div>
                      </FeatureItem>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* bottom feature  */}

          <div className="row align-items-end justify-content-between">
            <div className="col-4">
              <FeatureItem
                title="Car Size"
                text="Compact hatchback seats four with 4m length and 1.7m width."
                extraClasses="bottomLeft pe-lg-5"
                img={carSize}
              >
                <div className="bottom-shape">
                  <BottomLeftSVG svgRef={svgRef} inView={inView} />
                </div>
              </FeatureItem>
            </div>
            <div className="col-4">
              <FeatureItem
                title="Safety"
                text="The car has safety features: ESC, ABS, and airbags."
                extraClasses="bottomRight reverse ps-lg-5"
                img={safety}
              >
                <div className="bottom-shape bottom-right">
                  <BottomRightSVG svgRef={svgRef} inView={inView} />
                </div>
              </FeatureItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
