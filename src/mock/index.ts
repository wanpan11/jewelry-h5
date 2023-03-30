import Mock from "mockjs";

Mock.mock(/natural\/list/, req => {
  const naturalList = [
    {
      deliveryTime: "20",
      origin: "孟买",
      shape: 1,
      color: 2,
      neatness: 3,
      cut: 4,
      polishing: 4,
      symmetry: 1,
      certificate: 1,
      fluorescence: 1,
    },
  ];

  return {
    code: 0,
    data: { list: naturalList },
  };

  // return Mock.mock({
  //   code: 1,
  //   data: {
  //     "list|5": [
  //       {
  //         "id|+1": 0,
  //         category: 0,
  //         name: "厂商",
  //         contact: "联系",
  //         mobile: "1235",
  //         updateTime: "updateTime",
  //       },
  //     ],
  //   },
  // });
});
