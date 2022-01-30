import React, { createContext, useState } from "react";
import "./style.scss";
import { iGameCtx, iGameState } from "./types";
import { GAME_ATTEMPTS } from "./constants";
import { randGameColors } from "./utils";
import Options from "./jsx/Options";
import Field from "./jsx/Field";
import List from "./jsx/List";
import Status from "./jsx/Status";

export const GameContext = createContext<Partial<iGameCtx>>({});

export const initState: () => iGameState = () => ({
  gameColors: randGameColors(),
  activeColor: null,
  gameStatus: null,
  gameAttempts: GAME_ATTEMPTS,
});

const ColorGame: React.FC = () => {
  const [state, setState] = useState(initState());

  return (
    <GameContext.Provider value={{ state, setState, initState }}>
      <div className="colorGame" data-status={state!.gameStatus}>
        <Options />
        <Field />
        <List />
        <Status />
      </div>
    </GameContext.Provider>
  );
};

export default ColorGame;
