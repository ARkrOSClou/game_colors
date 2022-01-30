import React, { useContext } from "react";
import { GameContext } from "../index";
import { RESET_LABEL } from "../constants";

const Reset: React.FC = () => {
  const { setState, initState } = useContext(GameContext);

  const resetHandler = () => {
    setState!(initState!());
  };

  return (
    <button className="colorGame__reset" onClick={resetHandler}>
      {RESET_LABEL}
    </button>
  );
};

export default Reset;
