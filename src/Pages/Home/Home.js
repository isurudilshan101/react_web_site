import React from "react";
import Navigation from "../../Components/Navigation/NavigationBar";
import MainImage from "../../Components/MainImage/MainImage";
import WebMobileSection from "../../Components/WebMobileSection/WebMobileSection";
import DigitalStrategySection from "../../Components/DigitalStrategySection/DigitalStrategySection";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <MainImage />
      <WebMobileSection />
      <DigitalStrategySection />
      <Footer />
    </div>
  );
};

export default Home;
