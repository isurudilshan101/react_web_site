import React, { useState, useEffect } from "react";
import Content from "../Content/Content";

const MainImage = () => {
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

  console.log(screenWidth);
  const calculateHeight = () => {
    if (screenWidth >= 1440) {
      return 700;
    } else if (screenWidth >= 1200) {
      return 700;
    } else if (screenWidth < 1200 && screenWidth > 375) {
      return 448;
    } else {
      return 218;
    }
  };

  const height = calculateHeight();

  return (
    <div className="">
      <img
        src="/images/main_image.png"
        alt="mainImage"
        className="w-full h-full object-fill"
        style={{ height: `${height}px` }}
      />

      {height === 700 && (
        <div className="h-[306px] w-[630px] bg-gradient-to-r from-red-400 to-blue-400 text-white p-[24px] pt-[32px] pl-[40px] pb-[40px] gap-20 absolute top-[354px] left-[80px]">
          <Content
            text={`We Crush Your <br> Competitors,<br>Goals, And Sales Records -<br>Without The B.S.`}
            className="font-bold text-4xl"
          />
        </div>
      )}

      {height === 448 && (
        <div className="h-auto w-auto bg-gradient-to-r from-red-400 to-blue-400 text-white p-[24px] pt-[32px] pl-[40px] pb-[40px] gap-20   top-[354px] left-[80px]">
          <Content
            text={`We Crush Your   Competitors,<br>Goals, And Sales Records -<br>Without The B.S.`}
            className="font-bold text-2xl"
          />
        </div>
      )}

      {height === 218 && (
        <div className="h-auto w-auto bg-gradient-to-r from-red-400 to-blue-400 text-white p-[24px] pt-[32px] pl-[40px] pb-[40px] gap-20   top-[354px] left-[80px]">
          <Content
            text={`We Crush Your   Competitors,<br>Goals, And Sales Records -<br>Without The B.S.`}
            className="font-bold text-lg"
          />
        </div>
      )}
    </div>
  );
};

export default MainImage;
