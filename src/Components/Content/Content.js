import React from "react";
import Button from "../Button/Button";

const Content = ({ text, className }) => {
  return (
    <div>
      {/* <p className={className}>{text}</p> */}
      <p className={className} dangerouslySetInnerHTML={{ __html: text }} />
      <div className="mt-6">
        <Button title="GET FREE CONSULTATION" />
      </div>
    </div>
  );
};

export default Content;

// className="font-bold text-4xl"
