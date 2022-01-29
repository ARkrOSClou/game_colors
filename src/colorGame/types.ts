import React from "react";

export type iGameColor = { name: string; hex: string };
export type iGameColors = iGameColor[];
export type iGameState = {
  gameColors: iGameColors;
};
export type iGameCtx = {
  state: iGameState;
  setState?: React.Dispatch<React.SetStateAction<iGameState>>;
};
