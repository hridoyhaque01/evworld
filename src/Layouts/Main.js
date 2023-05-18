import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../Components/Shared/TopNavbar/TopNavbar";

export default function Main() {
  return (
    <div className="bg-navyDark">
      <TopNavbar></TopNavbar>
      <Outlet></Outlet>
    </div>
  );
}
