import React from "react";
import { iGameColors } from "../types";

const List: React.FC<{ colors: iGameColors }> = (props) => {
  const sort = props.colors.map(({ name }) => name).sort();
  return (
    <ul className="colorGame__list">
      {sort.map((name) => {
        return <li key={name}>{name}</li>;
      })}
    </ul>
  );
};

export default List;
