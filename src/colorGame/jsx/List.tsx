import React, { useContext } from "react";
import { GameContext } from "../index";

const List: React.FC = () => {
  const { state } = useContext(GameContext);

  const sort = state!.gameColors.map(({ name }) => name).sort();

  return (
    <ul className="colorGame__list">
      {sort.map((name) => {
        return <li key={name}>{name}</li>;
      })}
    </ul>
  );
};

export default List;
