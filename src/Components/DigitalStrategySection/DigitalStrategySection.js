import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

const DigitalStrategySection = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateImageSize = () => {
    if (screenWidth <= 1440 && screenWidth > 1200) {
      return {
        width: 414,
        height: 414,
      };
    } else if (screenWidth <= 1200 && screenWidth > 768) {
      return {
        width: 368,
        height: 368,
      };
    } else if (screenWidth <= 768 && screenWidth > 375) {
      return {
        width: 275,
        height: 275,
      };
    } else {
      return {
        width: 275,
        height: 275.82,
      };
    }
  };

  const imageSize = calculateImageSize();

  if (screenWidth <= 1440 && screenWidth > 768) {
    console.log("Desktop layout");
    return (
      <div className="container mx-auto flex items-center justify-between p-8">
        {/* Right Column (Description and Button) */}

        <div className="w-1/2 flex flex-col items-start">
          <span className="text-lg font-bold text-blue-500">
            Digital Strategy Consulting
          </span>

          <p className="text-sm mb-4 text-left">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>

          <Button title="LEARN MORE" />
        </div>

        {/* Left Column (Image) */}

        <div className="mb-8">
          <img
            src="/images/digital_strategy_image.png"
            alt="web"
            style={{ width: imageSize.width, height: imageSize.height }}
          />
        </div>
      </div>
    );
  } else if (screenWidth > 375 && screenWidth < 768) {
    return (
      <div className="container mx-auto flex items-center justify-between p-8">
        {/* Right Column (Description and Button) */}

        <div className="w-1/2 flex flex-col items-start">
          <div className="flex flex-col items-center text-center">
            <span className="text-lg font-bold text-blue-500">
              Digital Strategy Consulting
            </span>
          </div>

          <p className="text-sm mb-4 text-left">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <Button title="LEARN MORE" />
        </div>

        {/* Left Column (Image) */}
        <div className="mb-8">
          <img
            src="/images/digital_strategy_image.png"
            alt="web"
            style={{ width: imageSize.width, height: imageSize.height }}
          />
        </div>
      </div>
    );
  } else if (screenWidth <= 375) {
    return (
      <div className="container mx-auto flex flex-col items-center p-8">
        {/* Description and Button */}
        <div className="flex flex-col items-center text-center">
          <span className="text-lg font-bold text-blue-500">
            Digital Strategy Consulting
          </span>

          <p className="text-sm mb-4 text-center">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>

          <Button title="LEARN MORE" />
        </div>

        {/* Mobile Image */}
        <div className="mb-8">
          <img
            src="/images/digital_strategy_image.png"
            alt="mobile"
            style={{ width: "275px", height: "275.68px" }}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DigitalStrategySection;
