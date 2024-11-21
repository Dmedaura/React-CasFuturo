import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import LandingPage from "../LandingPage";
import Footer from "../Footer";

const Pagina1 = () => {
  return (
    <>
      <div className="pt-[112px]">
        <HeroSection />
        <LandingPage />
        <Footer />
      </div>
    </>
  );
};

export default Pagina1;
