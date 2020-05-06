const colors = {
  red: { name: "Red", hex: "#E17878" },
};

export default colors;

export const getColor = (code) => colors[code];
export const getColorName = (code) => getColor(code).name;
export const getColorHex = (code) => getColor(code).hex;
