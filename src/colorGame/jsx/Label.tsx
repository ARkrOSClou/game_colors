import React, { useContext } from "react";
import { iGameColorName, iGameColors, iGameColor } from "../types";
import { GameContext } from "../index";
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
      const active = colors.find((f) => f.name === activeColor)!;

      let gameAttempts = prev.gameAttempts;

      const setWrong = (current: iGameColor) => {
        active.statusColor = false;
        current.statusLabel = false;
        gameAttempts--;
      };

      const setDone = (current: iGameColor) => {
        active.statusColor = true;
        current.statusLabel = true;
      };

      colors.forEach((m) => {
        if (name !== m.name) {
          return;
        }
        const current: iGameColor = colors.find((f) => f.name === m.name)!;
        if (active === current) {
          setDone(current);
        } else {
          setWrong(current);
        }
      });
      return {
        ...prev,
        activeColor: null,
        gameColors: colors,
        gameAttempts: gameAttempts,
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
