import Mock from "mockjs";
import { NaturalApi } from "@src/types/api";
import naturalData from "./naturalData.json";

Mock.setup({
  timeout: 800,
});

// const naturalData: NaturalApi.ListRes = Mock.mock({
//   "list|20": [
//     {
//       "id|+1": 0,
//       "deliveryTime|1-30": 1,
//       "origin|1": ["孟买", "安特卫普", "苏拉特", "RAMAT GAN", "印度", "上海"],
//       "supplier|1": ["SHREEDIA", "UTZAVERI", "BASHARI", "KGK"],
//       "shape|1-11": 1,
//       "color|1-12": 1,
//       "neatness|1-12": 1,
//       "cut|1-4": 1,
//       "polishing|1-4": 1,
//       "symmetry|1-4": 1,
//       "certificate|1-5": 1,
//       "fluorescence|1-5": 1,
//       "karat|0-5.1": 1,
//       "size|1": ["4.54*4.53*3.58"],
//     },
//   ],
// });

// console.log("naturalData ===> ", naturalData);

Mock.mock(/natural\/list/, req => {
  const query: NaturalApi.ListReq = JSON.parse(req.body);
  delete query.pageNum;
  delete query.pageSize;

  const queryData: NaturalApi.NaturalInfo[] = [];
  naturalData.list.forEach(e => {
    const keys = Object.keys(query) as (keyof NaturalApi.NaturalInfo)[];
    let num = 0;

    if (keys.length) {
      keys.forEach(i => {
        if (e[i] == query[i]) {
          num += 1;
        }
      });

      if (num === keys.length) {
        queryData.push(e);
      }
    } else {
      queryData.push(e);
    }
  });

  return {
    code: 1,
    data: { list: queryData },
  };
});
