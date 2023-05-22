import React from "react";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className=" max-w-[1440px] mx-auto relative">
      <Outlet></Outlet>
    </div>
  );
}
