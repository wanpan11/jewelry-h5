export const tab = [{ id: "1", label: "天然钻", path: "/natural" }];

export const queryName = {
  shape: "shape",
  color: "color",
};

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
};
