const colors = {
  red: { name: "Red", hex: "#E17878" },
  green: { name: "Green", hex: "#78e19e" },
  blue: { name: "Blue", hex: "#78c5ff" },
  purple: { name: "Purple", hex: "#d378ff" },
  orange: { name: "Orange", hex: "#ffb878" },
  pink: { name: "Pink", hex: "#ff89c3" },
  gold: { name: "Gold", hex: "#ffd044" },
};

export default colors;

export const getColor = (code) => colors[code];
export const getColorName = (code) => getColor(code).name;
export const getColorHex = (code) => getColor(code).hex;
