import React, { useContext } from "react";
import { ATTEMPTS_LABEL } from "../constants";
import { GameContext } from "../index";

const Attempts: React.FC = () => {
  const { state } = useContext(GameContext);

  const attempts: number = state!.gameAttempts;

  return <span className="colorGame__attempts">{`${ATTEMPTS_LABEL} ${attempts}`}</span>;
};

export default Attempts;
