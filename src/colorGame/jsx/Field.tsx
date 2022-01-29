import React, { useContext } from "react";
import Item from "./Item";
import { GameContext } from "../index";

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
