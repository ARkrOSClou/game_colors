import React, { useContext } from "react";
import { GameContext } from "../index";
import { iGameColorName, iGameColors, iGameColor } from "../types";
import MarkWrong from "./MarkWrong";
import MarkDone from "./MarkDone";

const cloneDeep = require("lodash/cloneDeep");

const Label: React.FC<{ name: iGameColorName }> = ({ name }) => {
  const { state, setState } = useContext(GameContext);

  const color: iGameColor = state!.gameColors.find((f) => f.name === name)!;

  const isWrong = color.statusLabel === false;
  const isDone = color.statusLabel === true;

  const activeLabelHandler = () => {
    const { activeColor } = state!;

    if (isDone) {
      return;
    }

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
    <button className="colorGame__label" data-wrong={isWrong} data-done={isDone} onClick={activeLabelHandler}>
      <MarkWrong show={isWrong} />
      <MarkDone show={isDone} />
      <span>{name}</span>
    </button>
  );
};

export default Label;
