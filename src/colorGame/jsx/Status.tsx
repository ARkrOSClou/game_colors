import React, { useContext, useEffect } from "react";
import { GameContext } from "../index";
import Reset from "./Reset";

const Status: React.FC = () => {
  const { state, setState } = useContext(GameContext);

  const gameWin = state!.gameColors.filter((f) => f.statusColor).length === state!.gameColors.length;
  const gameOver = state!.gameAttempts <= 0;

  useEffect(() => {
    if (!gameWin && !gameOver) {
      return;
    }
    setState!((prev) => ({
      ...prev,
      gameStatus: gameWin,
    }));
  }, [gameOver, gameWin]);

  if (state!.gameStatus === null) {
    return <></>;
  }

  const status = gameWin ? "You Win!" : "You Lose";

  return (
    <div className="colorGame__status">
      <h3>{status}</h3>
      <Reset />
    </div>
  );
};

export default Status;
