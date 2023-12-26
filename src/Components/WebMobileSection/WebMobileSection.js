import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

const WebMobileSection = () => {
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
        {/* Left Column (Image) */}
        <div className="mb-8">
          <img
            src="/images/web_mobile_image.png"
            alt="web"
            style={{ width: imageSize.width, height: imageSize.height }}
          />
        </div>

        {/* Right Column (Description and Button) */}
        <div className="w-1/2 flex flex-col items-start">
          <span className="text-lg font-bold text-blue-500">
            Web & Mobile App Development
          </span>

          <p className="text-sm mb-4 text-left">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <Button title="LEARN MORE" />
        </div>
      </div>
    );
  } else if (screenWidth > 375 && screenWidth < 768) {
    return (
      <div className="container mx-auto flex items-center justify-between p-8">
        {/* Left Column (Image) */}
        <div className="mb-8">
          <img
            src="/images/web_mobile_image.png"
            alt="web"
            style={{ width: imageSize.width, height: imageSize.height }}
          />
        </div>

        {/* Right Column (Description and Button) */}
        <div className="w-1/2 flex flex-col items-start">
          <span className="lg:text-sm font-bold text-blue-500">
            Web & Mobile App Development
          </span>

          <p className="text-sm mb-4 text-left">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <Button title="LEARN MORE" />
        </div>
      </div>
    );
  } else if (screenWidth <= 375) {
    console.log("Mobile layout");
    // Mobile responsive layout
    return (
      <div className="container mx-auto flex flex-col items-center p-8">
        {/* Mobile Image */}
        <div className="mb-8">
          <img
            src="/images/web_mobile_image.png"
            alt="mobile"
            style={{ width: "275px", height: "275.68px" }}
          />
        </div>

        {/* Description and Button */}
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-blue-500">
            Web & Mobile App Development
          </span>

          <p className="text-sm mb-4 text-center">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <Button title="LEARN MORE" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default WebMobileSection;
