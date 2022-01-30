import { FIELD_SIZE } from "./constants";
import { w3cColors } from "./colorSchema";
import { iGameColor } from "./types";

export function randGameColors() {
  const colsCount = Math.pow(FIELD_SIZE, 2);
  const schema = Object.entries(w3cColors).map(
    ([name, hex]): iGameColor => ({
      name,
      hex,
    })
  );
  const colors = [];
  for (let i = 0; i < colsCount; i++) {
    const rand = schema.splice(Math.floor(Math.random() * schema.length), 1);
    colors.push(rand[0]);
  }
  return colors;
}
