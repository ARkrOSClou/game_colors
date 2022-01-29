import React from "react";
import { fieldColors } from "./utils";
import "./style.scss";
import Field from "./jsx/Field";
import List from "./jsx/List";

const ColorGame: React.FC = () => {
  const colors = fieldColors();

  return (
    <div className="colorGame">
      <Field colors={colors} />
      <List colors={colors} />
    </div>
  );
};

export default ColorGame;
