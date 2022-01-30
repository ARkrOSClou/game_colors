import React, { useContext } from "react";
import { FIELD_SIZE } from "../constants";
import { GameContext } from "../index";
import { iGameColor } from "../types";

const Item: React.FC<{ color: iGameColor }> = ({ color }) => {
  const { state, setState } = useContext(GameContext);

  const activeColorHandler = () => {
    setState!((prev) => ({
      ...prev,
      activeColor: color.name,
    }));
  };

  const isActive = state!.activeColor === color.name;

  return (
    <button
      className="colorGame__item"
      onClick={activeColorHandler}
      data-active={isActive}
      style={{
        color: `#${color.hex}`,
        maxWidth: `${100 / FIELD_SIZE}%`,
      }}
    >
      <span>{JSON.stringify(color.statusColor)}</span>
    </button>
  );
};

export default Item;
