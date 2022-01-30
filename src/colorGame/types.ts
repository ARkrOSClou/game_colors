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
};

export type iGameCtx = {
  state: iGameState;
  setState?: React.Dispatch<React.SetStateAction<iGameState>>;
};
