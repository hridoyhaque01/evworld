import React from "react";
import Banner from "../../Components/GalleryComponents/Banner/Banner";
import GalleryImages from "../../Components/GalleryComponents/GalleryImages/GalleryImages";
import Footer from "../../Components/Shared/FooterOne/Footer";
import Navbar from "../../Components/Shared/NavbarOne/Navbar";

function Gallery() {
  return (
    <div className="bg-navyDark">
      <Navbar></Navbar>
      <main>
        <Banner></Banner>
        <GalleryImages></GalleryImages>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Gallery;
