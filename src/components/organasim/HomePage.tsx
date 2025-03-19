import React from "react";
import HeroSection from "../atoms/HeroSection";
import FeatureServices from "../atoms/ServiceFeatures";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-20 pb-20">
      <HeroSection />
      <FeatureServices />
    </div>
  );
};

export default HomePage;
