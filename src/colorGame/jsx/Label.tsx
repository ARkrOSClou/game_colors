import React, { useContext } from "react";
import { GameContext } from "../index";
import { iGameColorName } from "../types";

const List: React.FC<{ name: iGameColorName }> = ({ name }) => {
  const { state, setState } = useContext(GameContext);

  const activeLabelHandler = () => {
    if (state!.activeColor !== name) {
      return;
    }
    setState!((prev) => ({
      ...prev,
      activeColor: null,
    }));
  };

  return (
    <button className="colorGame__label" onClick={activeLabelHandler}>
      {name}
    </button>
  );
};

export default List;
