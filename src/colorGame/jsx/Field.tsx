import React, { useContext } from "react";
import Item from "./Item";
import { GameContext } from "../index";

const Field: React.FC = () => {
  const { state } = useContext(GameContext);

  return (
    <div className="colorGame__field">
      {state!.gameColors.map((color, index: number) => {
        return <Item key={index} hex={color.hex} />;
      })}
    </div>
  );
};

export default Field;
