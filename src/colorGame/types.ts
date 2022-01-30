import React from "react";

export type iGameColorName = string;
export type iGameColorHex = string;

export type iGameColor = {
  name: iGameColorName;
  hex: iGameColorHex;
  statusLabel?: boolean;
  statusColor?: boolean;
};

export type iGameColors = iGameColor[];

export type iGameState = {
  gameColors: iGameColors;
  activeColor: null | iGameColorHex;
  gameStatus: null | boolean;
  gameAttempts: number;
};

export type iGameCtx = {
  state: iGameState;
  initState: () => iGameState;
  setState?: React.Dispatch<React.SetStateAction<iGameState>>;
};
