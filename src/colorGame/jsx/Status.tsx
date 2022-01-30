import React, { useContext, useEffect } from "react";
import { STATUS_LOSE, STATUS_WIN } from "../constants";
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
  }, [gameOver, gameWin, setState]);

  if (state!.gameStatus === null) {
    return <></>;
  }

  const status = gameWin ? STATUS_WIN : STATUS_LOSE;

  return (
    <div className="colorGame__status">
      <h3>{status}</h3>
      <Reset />
    </div>
  );
};

export default Status;
