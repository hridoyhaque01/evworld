import React from "react";
import { missons } from "../../data/db";
import MisionItem from "./MisionItem";

export default function Mision() {
  return (
    <section className="mision">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="misson-content">
              <div className="row px-3 px-md-0 justify-content-between gap-y-4 ">
                {/* single mision content  */}

                {missons?.map((misson) => {
                  const { id, icon, title, texts, classIcon } = misson || {};
                  return (
                    <MisionItem
                      key={id}
                      icon={icon}
                      title={title}
                      texts={texts}
                      classIcon={classIcon}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-xl-3 mt-4 mt-xl-0">
            <div className="vision">
              <div className="vision-text">
                <h2>Mission and Vision</h2>
                <p>
                  Our mission is to create a cleaner and more sustainable future
                  through electric mobility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
