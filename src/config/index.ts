export const tab = [{ id: "1", label: "天然钻", path: "/natural" }];

export const queryList = [
  { name: "shape", label: "形状" },
  { name: "color", label: "颜色" },
  { name: "neatness", label: "净度" },
  { name: "cut", label: "切工" },
  { name: "polishing", label: "抛光" },
  { name: "symmetry", label: "对称" },
  { name: "certificate", label: "证书" },
  { name: "fluorescence", label: "荧光" },
];

export const queryObj: Record<string, { value: number; text: string }[]> = {
  shape: [
    { value: 1, text: "圆形" },
    { value: 2, text: "梨形" },
    { value: 3, text: "公主方" },
    { value: 4, text: "阿斯切" },
    { value: 5, text: "椭圆形" },
    { value: 6, text: "雷迪恩" },
    { value: 7, text: "祖母绿" },
    { value: 8, text: "心形" },
    { value: 9, text: "垫形" },
    { value: 10, text: "马眼" },
    { value: 11, text: "其他" },
  ],
  color: [
    { value: 1, text: "D" },
    { value: 2, text: "E" },
    { value: 3, text: "F" },
    { value: 4, text: "G" },
    { value: 5, text: "H" },
    { value: 6, text: "I" },
    { value: 7, text: "J" },
    { value: 8, text: "K" },
    { value: 9, text: "L" },
    { value: 10, text: "M" },
    { value: 11, text: "N" },
    { value: 12, text: "<N" },
  ],
  neatness: [
    { value: 1, text: "FL" },
    { value: 2, text: "IF" },
    { value: 3, text: "VVS1" },
    { value: 4, text: "VVS2" },
    { value: 5, text: "VS1" },
    { value: 6, text: "VS2" },
    { value: 7, text: "SI1" },
    { value: 8, text: "SI2" },
    { value: 9, text: "SI3" },
    { value: 10, text: "I1" },
    { value: 11, text: "I2" },
    { value: 12, text: "I3" },
  ],
  cut: [
    { value: 1, text: "EX" },
    { value: 2, text: "VG" },
    { value: 3, text: "GD" },
    { value: 4, text: "FR" },
  ],
  polishing: [
    { value: 1, text: "EX" },
    { value: 2, text: "VG" },
    { value: 3, text: "GD" },
    { value: 4, text: "FR" },
  ],
  symmetry: [
    { value: 1, text: "EX" },
    { value: 2, text: "VG" },
    { value: 3, text: "GD" },
    { value: 4, text: "FR" },
  ],
  certificate: [
    { value: 1, text: "GIA" },
    { value: 2, text: "IGI" },
    { value: 3, text: "HRD" },
    { value: 4, text: "NGTC" },
    { value: 5, text: "Other" },
  ],
  fluorescence: [
    { value: 1, text: "N" },
    { value: 2, text: "F" },
    { value: 3, text: "M" },
    { value: 4, text: "S" },
    { value: 5, text: "VS" },
  ],
};

export enum Shape {
  "圆形" = 1,
  "梨形",
  "公主方",
  "阿斯切",
  "椭圆形",
  "雷迪恩",
  "祖母绿",
  "心形",
  "垫形",
  "马眼",
  "其他",
}
export enum Color {
  "D" = 1,
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "<N",
}
export enum Neatness {
  "FL" = 1,
  "IF",
  "VVS1",
  "VVS2",
  "VS1",
  "VS2",
  "SI1",
  "SI2",
  "SI3",
  "I1",
  "I2",
  "I3",
}
export enum Cut {
  "EX" = 1,
  "VG",
  "GD",
  "FR",
}
export enum Polishing {
  "EX" = 1,
  "VG",
  "GD",
  "FR",
}
export enum Symmetry {
  "EX" = 1,
  "VG",
  "GD",
  "FR",
}
export enum Certificate {
  "GIA" = 1,
  "IGI",
  "HRD",
  "NGTC",
  "Other",
}
export enum Fluorescence {
  "N" = 1,
  "F",
  "M",
  "S",
  "VS",
}
