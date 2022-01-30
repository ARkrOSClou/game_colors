import React, { useContext } from "react";
import { GameContext } from "../index";
import { aSortColors } from "../utils";
import Label from "./Label";

const List: React.FC = () => {
  const { state } = useContext(GameContext);

  const sortColors = aSortColors(state!.gameColors);

  const isLocked = !state!.activeColor;

  return (
    <div className="colorGame__list" data-locked={isLocked}>
      {sortColors.map((color) => {
        return <Label key={color.name} color={color} />;
      })}
    </div>
  );
};

export default List;
