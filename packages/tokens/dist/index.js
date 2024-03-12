"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeights: () => lineHeights,
  radii: () => radii,
  space: () => space
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
var colors = {
  black: "#212532",
  white: "#FFFFFF",
  action: "#79D9A",
  div: "#333849",
  "light-bg": "#EDF2F7",
  "light-action": "#4F4D4D",
  "light-text": "#333849",
  "light-div": "#797D9A",
  blue: "#6F6FE7",
  red: "#F27878",
  green: "#5CB95C",
  orange: "#D7873D",
  cian: "#3DC4D7",
  purple: "#9747FF",
  pink: "#FF47E2",
  yellow: "#BC01F"
};

// src/font-sizes.ts
var fontSizes = {
  xxs: "0.625rem",
  // 10px
  xs: "0.755rem",
  // 12px
  sm: "0.875rem",
  // 14px
  md: "1rem",
  // 16px
  lg: "1.125rem",
  // 18px
  xl: "1.25rem",
  // 20px
  "2xl": "1.5rem",
  // 24px
  "4xl": "2rem",
  // 32px
  "6xl": "3rem",
  // px
  "7xl": "4rem",
  // px
  "8xl": "4.5rem",
  // px
  "9xl": "6rem"
  // px
};

// src/font-weights.ts
var fontWeights = {
  light: "300",
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  black: "900"
};

// src/fonts.ts
var fonts = {
  default: "Roboto, sans-serif",
  code: "JetBrains Mono"
};

// src/line-heights.ts
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/radii.ts
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};

// src/space.ts
var space = {
  1: "0.25rem",
  // 10px
  2: "0.5rem",
  // 12px
  3: "0.75rem",
  // 14px
  4: "1rem",
  // 16px
  5: "1.25rem",
  // 20px
  6: "1.5rem",
  // 24px
  7: "1.75rem",
  // 24px
  8: "2rem",
  // 32px
  10: "2.5rem",
  // px
  12: "3rem",
  // px
  16: "4rem",
  // px
  20: "5rem",
  // px
  40: "10rem",
  // px
  64: "16rem",
  // px
  80: "20rem"
  // px
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space
});
