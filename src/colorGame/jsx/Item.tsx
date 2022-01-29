import React from "react";
import { FIELD_SIZE } from "../constants";

const Item: React.FC<{ hex: string }> = (props) => {
  return (
    <div
      className="colorGame__item"
      style={{
        color: `#${props.hex}`,
        maxWidth: `${100 / FIELD_SIZE}%`,
      }}
    />
  );
};

export default Item;
