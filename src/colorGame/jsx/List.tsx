import React, { useContext } from "react";
import { GameContext } from "../index";
import Label from "./Label";

const List: React.FC = () => {
  const { state } = useContext(GameContext);

  const sort = state!.gameColors.map(({ name }) => name).sort();

  return (
    <div className="colorGame__list" aria-disabled={!state!.activeColor}>
      {sort.map((name) => {
        return <Label name={name} />;
      })}
    </div>
  );
};

export default List;
