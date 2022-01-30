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

// export function compareContrast(hex1: string, hex2: string) {
//   const [r1, g1, b1] = hexToRgb(hex1);
//   const [r2, g2, b2] = hexToRgb(hex2);
//   const lum1 = luminance(r1, g1, b1);
//   const lum2 = luminance(r2, g2, b2);
//   const brightest = Math.max(lum1, lum2);
//   const darkest = Math.min(lum1, lum2);
//   return (brightest + 0.05) / (darkest + 0.05);
// }
// function luminance(r: number, g: number, b: number) {
//   let a = [r, g, b].map((v) => {
//     v /= 255;
//     return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
//   });
//   return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
// }
// function hexToRgb(hex: string) {
//   let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   let rgb: number[] = [];
//   if (result) {
//     const [, r, g, b] = result;
//     rgb = [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
//   }
//   return rgb;
// }
