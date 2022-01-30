import React, { useContext } from "react";
import { GameContext } from "../index";
import Label from "./Label";

const List: React.FC = () => {
  const { state } = useContext(GameContext);

  const sortNames = state!.gameColors.map((m) => m.name).sort();

  const isLocked = !state!.activeColor;

  return (
    <div className="colorGame__list" data-locked={isLocked}>
      {sortNames.map((name) => {
        return <Label key={name} name={name} />;
      })}
    </div>
  );
};

export default List;
