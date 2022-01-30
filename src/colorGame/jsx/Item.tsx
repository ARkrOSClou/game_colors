import React, { useContext } from "react";
import { FIELD_SIZE } from "../constants";
import { GameContext } from "../index";
import { iGameColor } from "../types";
import MarkDone from "./MarkDone";
import MarkWrong from "./MarkWrong";

const Item: React.FC<{ color: iGameColor }> = ({ color }) => {
  const { state, setState } = useContext(GameContext);

  const isWrong = color.statusColor === false;
  const isDone = color.statusColor === true;

  const activeColorHandler = () => {
    if (isDone) {
      return;
    }

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
      data-wrong={isWrong}
      data-done={isDone}
      style={{
        color: `#${color.hex}`,
        maxWidth: `${100 / FIELD_SIZE}%`,
      }}
    >
      <MarkWrong show={isWrong} />
      <MarkDone show={isDone} />
    </button>
  );
};

export default Item;
