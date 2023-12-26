import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-orange-500  text-white   py-2 px-4 ">
        {title}
      </button>
    </div>
  );
};

export default Button;
