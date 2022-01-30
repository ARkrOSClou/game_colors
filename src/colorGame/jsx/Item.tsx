import React, { useContext } from "react";
import { iGameColor } from "../types";
import { FIELD_SIZE } from "../constants";
import { GameContext } from "../index";
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

  let contrast = false;
  if (color) {
    if (isWrong) {
      contrast = color.name.search(/red/i) >= 0;
    }
    if (isDone) {
      contrast = color.name.search(/green/i) >= 0;
    }
  }

  return (
    <button
      className="colorGame__item"
      onClick={activeColorHandler}
      data-active={isActive}
      data-wrong={isWrong}
      data-done={isDone}
      data-contrast={contrast}
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
