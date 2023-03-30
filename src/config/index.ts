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

export const queryObj: Record<
  string,
  { value: string | number; text: string }[]
> = {
  shape: [
    { value: 1, text: "圆形" },
    { value: 2, text: "梨形" },
    { value: 3, text: "公主方" },
    { value: 5, text: "阿斯切" },
    { value: 6, text: "椭圆形" },
    { value: 7, text: "雷迪恩" },
    { value: 8, text: "祖母绿" },
    { value: 9, text: "心形" },
    { value: 10, text: "垫形" },
    { value: 11, text: "马眼" },
    { value: 12, text: "其他" },
  ],
  color: [
    { value: 1, text: "D" },
    { value: 2, text: "E" },
    { value: 3, text: "F" },
    { value: 5, text: "G" },
    { value: 6, text: "H" },
    { value: 7, text: "I" },
    { value: 8, text: "J" },
    { value: 9, text: "K" },
    { value: 10, text: "L" },
    { value: 11, text: "M" },
    { value: 12, text: "N" },
    { value: 13, text: "<N" },
  ],
  neatness: [
    { value: 1, text: "FL" },
    { value: 2, text: "IF" },
    { value: 3, text: "VVS1" },
    { value: 5, text: "VVS2" },
    { value: 6, text: "VS1" },
    { value: 7, text: "VS2" },
    { value: 8, text: "SI1" },
    { value: 9, text: "SI2" },
    { value: 10, text: "SI3" },
    { value: 11, text: "I1" },
    { value: 12, text: "I2" },
    { value: 13, text: "I3" },
  ],
  cut: [
    { value: 1, text: "EX" },
    { value: 2, text: "VG" },
    { value: 3, text: "GD" },
    { value: 5, text: "FR" },
  ],
  polishing: [
    { value: 1, text: "EX" },
    { value: 2, text: "VG" },
    { value: 3, text: "GD" },
    { value: 5, text: "FR" },
  ],
  symmetry: [
    { value: 1, text: "EX" },
    { value: 2, text: "VG" },
    { value: 3, text: "GD" },
    { value: 5, text: "FR" },
  ],
  certificate: [
    { value: 1, text: "GIA" },
    { value: 2, text: "IGI" },
    { value: 3, text: "HRD" },
    { value: 5, text: "NGTC" },
    { value: 6, text: "Other" },
  ],
  fluorescence: [
    { value: 1, text: "N" },
    { value: 2, text: "F" },
    { value: 3, text: "M" },
    { value: 5, text: "S" },
    { value: 6, text: "VS" },
  ],
};

export enum shape {
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
export enum color {
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
export enum neatness {
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
export enum cut {
  "EX" = 1,
  "VG",
  "GD",
  "FR",
}
export enum polishing {
  "EX" = 1,
  "VG",
  "GD",
  "FR",
}
export enum symmetry {
  "EX" = 1,
  "VG",
  "GD",
  "FR",
}
export enum certificate {
  "GIA" = 1,
  "IGI",
  "HRD",
  "NGTC",
  "Other",
}
export enum fluorescence {
  "N" = 1,
  "F",
  "M",
  "S",
  "VS",
}
