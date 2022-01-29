import React from "react";

type iGameColor = { name: String; hex: String };
type iGameColors = iGameColor[];

const ColorFieldItem: React.FC<{ hex: String }> = (props) => {
  return (
    <div
      className="colorField__item"
      style={{
        background: `#${props.hex}`,
        minHeight: "20px",
      }}
    />
  );
};

const ColorField: React.FC<{ colors: iGameColors }> = (props) => {
  return (
    <div className="colorField">
      {props.colors.map((color) => {
        return <ColorFieldItem hex={color.hex} />;
      })}
    </div>
  );
};

export default ColorField;
