import React, { useContext } from "react";
import { GameContext } from "../index";
import Item from "./Item";

const Field: React.FC = () => {
  const { state } = useContext(GameContext);

  return (
    <div className="colorGame__field">
      {state!.gameColors.map((color, index) => {
        return <Item key={index} color={color} />;
      })}
    </div>
  );
};

export default Field;
