import React, { useContext } from "react";
import { GameContext } from "../index";

const Reset: React.FC = () => {
  const { setState, initState } = useContext(GameContext);

  const resetHandler = () => {
    setState!(initState!());
  };

  return (
    <button className="colorGame__reset" onClick={resetHandler}>
      Click to reset
    </button>
  );
};

export default Reset;
