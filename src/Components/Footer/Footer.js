import React, { useState, useEffect } from "react";

const Footer = () => {
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

  if (screenWidth <= 1440 && screenWidth > 768) {
    return (
      <div className="bg-blue-500 text-white h-96 ">
        <div className="flex justify-between">
          <div className="w-1/2  p-10">
            {/* first column */}
            <img
              src="/images/footer_logo.png"
              alt="mobile"
              style={{ width: "238.89px", height: " 25px" }}
            />
            <p className="mt-6">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          {/* Second Column  */}
          <div className="w-1/4 mt-10">
            <h2 className="text-2xl font-bold">Our Technologies</h2>

            <ul>
              <li>ReactJs</li>
              <li>Gatsby</li>
              <li>NextJs</li>
              <li>NodeJs</li>
              <li>GraphQL</li>
              <li>Laravel</li>
            </ul>
          </div>
          {/* Third Column   */}
          <div className="w-1/4 mt-10">
            <h2 className="text-2xl font-bold">Our Services</h2>

            <ul>
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>Google Marketing solutions</li>
              <li>GraphQL</li>
              <li>Search Engine Optimization</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <hr className="border-t border-white mt-6 w-1/2" />
        </div>
        <div className="flex justify-center mt-8">
          <span>Privacy Policy | Terms & Conditions</span>
        </div>
      </div>
    );
  } else if (screenWidth <= 768 && screenWidth > 375) {
    // Mobile responsive layout
    return (
      <div className="bg-blue-500 text-white h-auto ">
        {/* Mobile Content for screenWidth <= 768 and screenWidth < 375 */}
        <div className="p-8">
          <img
            src="/images/footer_logo.png"
            alt="mobile"
            style={{ width: "238.89px", height: " 25px" }}
          />
          <p className="mt-6">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>
        <div className="flex justify-between p-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              {/* first  column */}
              <h2 className="text-lg font-bold">Our Services</h2>
              <ul className="text-sm">
                <li>ReactJs</li>
                <li>Gatsby</li>
                <li>NextJs</li>
                <li>NodeJs</li>
                <li>GraphQL</li>
                <li>Laravel</li>
              </ul>
            </div>

            <div>
              <div className="col-span-3">
                {/* Content  second column */}
                <h2 className="text-lg font-bold">Our Services</h2>

                <ul className="text-sm">
                  <li>Social media Marketing</li>
                  <li>Web & Mobile App Development</li>
                  <li>Data & Analytics</li>
                  <li>Google Marketing solutions</li>
                  <li>GraphQL</li>
                  <li>Search Engine Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center  ">
          <hr className="border-t border-white   w-1/2" />
        </div>
        <div className="flex justify-center ">
          <span>Privacy Policy | Terms & Conditions</span>
        </div>
      </div>
    );
  } else if (screenWidth <= 375) {
    console.log("Mobile layout");

    return (
      <div className="bg-blue-500 text-white h-auto">
        <div className="flex flex-col justify-center items-start ml-10">
          {/* First Column   */}
          <div className="w-full mt-10 text-left">
            {/* Content for the first column */}
            <img
              src="/images/footer_logo.png"
              alt="mobile"
              style={{ width: "238.89px", height: " 25px" }}
            />
            <p className="mt-6">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective - your
              business results.
            </p>
          </div>

          {/* Second Column   */}
          <div className="w-full mt-6 text-left">
            {/* Content for the second column */}
            <h2 className="text-2xl font-bold">Our Technologies</h2>
            <ul>
              <li>ReactJs</li>
              <li>Gatsby</li>
              <li>NextJs</li>
              <li>NodeJs</li>
              <li>GraphQL</li>
              <li>Laravel</li>
            </ul>
          </div>

          {/* Third Column   */}
          <div className="w-full mt-6 text-left">
            {/* Content for the third column */}
            <h2 className="text-2xl font-bold">Our Services</h2>
            <ul>
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>Google Marketing solutions</li>
              <li>GraphQL</li>
              <li>Search Engine Optimization</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <hr className="border-t border-white   w-1/2" />
        </div>
        <div className="flex justify-center ">
          <span>Privacy Policy | Terms & Conditions</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Footer;
