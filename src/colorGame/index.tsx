import React, { createContext, useState } from "react";
import { randGameColors } from "./utils";
import "./style.scss";
import Field from "./jsx/Field";
import List from "./jsx/List";
import { iGameCtx, iGameState } from "./types";

export const GameContext = createContext<Partial<iGameCtx>>({});

const ColorGame: React.FC = () => {
  const [state, setState] = useState({
    gameColors: randGameColors(),
    activeColor: null,
  } as iGameState);

  return (
    <GameContext.Provider value={{ state, setState }}>
      <div className="colorGame">
        <Field />
        <List />
      </div>
    </GameContext.Provider>
  );
};

export default ColorGame;
