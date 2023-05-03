import React from "react";

export default function Title({ title, text, children }) {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-10 ">
        <div className="d-flex flex-column common-title text-center text-uppercase">
          {children}
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
