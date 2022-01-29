import React from "react";
import Item from "./Item";
import { iGameColors } from "../types";

const Field: React.FC<{ colors: iGameColors }> = (props) => {
  return (
    <div className="colorGame__field">
      {props.colors.map((color, index) => {
        return <Item key={index} hex={color.hex} />;
      })}
    </div>
  );
};

export default Field;
