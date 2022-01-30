import React, { useContext } from "react";
import { GameContext } from "../index";
import { iGameColorName, iGameColors, iGameColor } from "../types";

const cloneDeep = require("lodash/cloneDeep");

const Label: React.FC<{ name: iGameColorName }> = ({ name }) => {
  const { state, setState } = useContext(GameContext);

  const color: iGameColor = state!.gameColors.find((f) => f.name === name)!;

  const activeLabelHandler = () => {
    const { activeColor } = state!;

    setState!((prev) => {
      const colors: iGameColors = cloneDeep(prev.gameColors);
      const active = colors.find((f) => f.name === activeColor);
      colors.forEach((m) => {
        if (name !== m.name) {
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
      {name}
      {
        // @ts-ignore
        JSON.stringify(color.statusLabel)
      }
    </button>
  );
};

export default Label;
