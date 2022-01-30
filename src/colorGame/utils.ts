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

export function compareContrast(hex1: string, hex2: string) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  let d = 0;
  for (let i = 0; i < rgb1.length; i++) {
    d += (rgb1[i] - rgb2[i]) * (rgb1[i] - rgb2[i]);
  }
  return Math.sqrt(d);
}
function hexToRgb(hex: string) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let rgb: number[] = [];
  if (result) {
    const [, r, g, b] = result;
    rgb = [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
  }
  return rgb;
}
