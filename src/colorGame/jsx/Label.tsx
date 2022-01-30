import React, { useContext } from "react";
import { GameContext } from "../index";
import { iGameColor, iGameColors } from "../types";

const cloneDeep = require("lodash/cloneDeep");

const Label: React.FC<{ color: iGameColor }> = ({ color }) => {
  const { state, setState } = useContext(GameContext);

  const activeLabelHandler = () => {
    const { activeColor } = state!;

    setState!((prev) => {
      const colors: iGameColors = cloneDeep(prev.gameColors);
      const active = colors.find((f) => f.name === activeColor);
      colors.forEach((m) => {
        if (color.name !== m.name) {
          return;
        }
        const current = colors.find((f) => f.name === m.name);
        if (active === current) {
          current!.statusLabel = true;
          current!.statusColor = true;
        } else {
          current!.statusLabel = false;
          active!.statusColor = false;
        }
      });
      return {
        ...prev,
        activeColor: null,
        gameColors: colors,
      };
    });
  };

  return (
    <button
      className="colorGame__label"
      // data-done={isDone}
      // data-wrong={isWrong}
      onClick={activeLabelHandler}
    >
      {color.name}
      {JSON.stringify(color.statusLabel)}
    </button>
  );
};

export default Label;
