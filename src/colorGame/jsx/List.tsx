import React from "react";
import { iGameColors } from "../types";

const List: React.FC<{ colors: iGameColors }> = (props) => {
  const sort = props.colors.map(({ name }) => name).sort();
  return (
    <div className="colorGame__list">
      <ul>
        {sort.map((name) => {
          return <li>{JSON.stringify(name)}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
