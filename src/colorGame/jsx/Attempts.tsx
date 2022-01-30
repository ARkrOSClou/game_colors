import React, { useContext } from "react";
import { GameContext } from "../index";

const Attempts: React.FC = () => {
  const { state } = useContext(GameContext);

  const attempts: number = state!.gameAttempts;

  return <span className="colorGame__attempts">Attempts left: {attempts}</span>;
};

export default Attempts;
