import React from "react";
import Reset from "./Reset";
import Attempts from "./Attempts";

const Options: React.FC = () => {
  return (
    <div className="colorGame__options">
      <Reset />
      <Attempts />
    </div>
  );
};

export default Options;
