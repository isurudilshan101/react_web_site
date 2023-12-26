import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link to="/">
            <img
              src="/images/footer_logo.png"
              alt="mobile"
              style={{ width: "100px", height: " 20px" }}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? "CLOSE" : "☰"}
            </button>
          </div>
        )}

        {/* Menu for 1440px and 1200px */}
        {!isMobile && window.innerWidth >= 768 && (
          <div className="lg:flex space-x-4 text-white">
            <Link to="/services">Services</Link>
            <Link to="/about"> About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/careers"> Careers</Link>
          </div>
        )}

        {/*  Menu for 768px */}
        {!isMobile && window.innerWidth < 768 && (
          <div className="lg:flex justify-center lg:space-x-4  text-white">
            <Link to="/services">Services</Link>
            <Link to="/about"> About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/careers"> Careers</Link>
          </div>
        )}

        {isOpen && isMobile && (
          <div className="lg:hidden absolute mt-[-10px] top-16 left-0 right-0 bg-blue-500  text-white ">
            <hr className="my-2 border-t border-white" />
            <Link to="/services" className="text-white block   text-center">
              Services
            </Link>
            <hr className="my-2 border-t border-white" />
            <Link to="/about" className="text-white block   text-center">
              About Us
            </Link>
            <hr className="my-2 border-t border-white" />
            <Link to="/contact" className="text-white block   text-center">
              Contact Us
            </Link>
            <hr className="my-2 border-t border-white" />
            <Link to="/careers" className="text-white block  text-center">
              Careers
            </Link>
            <hr className="my-2 border-t border-white" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
