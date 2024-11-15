import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import PlanSection from "../../components/PlanSection/PlanSection";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import SponsorsSection from "../../components/SponsorsSection/SponsorsSection";
import Footer from "../../components/Footer/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PlanSection />
      <FeatureSection />
      <SponsorsSection />
      <Footer />
    </>
  );
};

export default Landing;
