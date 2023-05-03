import React from "react";
import Analytics from "../components/home-components/Analytics";
import Banner from "../components/home-components/Banner";
import Features from "../components/home-components/Features";
import Mision from "../components/home-components/Mision";
import Product from "../components/home-components/Product";
import Team from "../components/home-components/Team";

export default function Home() {
  return (
    <main>
      <Banner />
      <Mision />
      <Team />
      <Analytics />
      <Product />
      <Features />
    </main>
  );
}
