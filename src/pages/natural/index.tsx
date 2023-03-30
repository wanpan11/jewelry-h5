import {
  Cell,
  Picker,
  Collapse,
  CollapseItem,
  Button,
} from "@nutui/nutui-react";
import lessStyle from "./index.module.less";
import { useState } from "react";
import { queryObj, queryName } from "@src/config";

const Natural = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [queryInfo, queryInfoHandle] = useState({ shape: "圆形", color: "D" });
  const [showName, showNameHandle] = useState(queryName.shape);

  const showList = queryObj[showName];

  return (
    <div>
      <Collapse
        activeName={["1"]}
        icon="arrow-down"
        iconSize="16"
        iconColor="#999"
      >
        <CollapseItem title="查询条件" name="1">
          <Cell
            isLink
            title="形状"
            desc={queryInfo.shape}
            onClick={() => {
              setIsVisible1(!isVisible1);
              showNameHandle(queryName.shape);
            }}
          />

          <Cell
            isLink
            title="颜色"
            desc={queryInfo.color}
            onClick={() => {
              setIsVisible1(!isVisible1);
              showNameHandle(queryName.color);
            }}
          />

          <div className={lessStyle.button_box}>
            <Button
              type="primary"
              block
              onClick={() => {
                console.log("queryInfo ===>", queryInfo);
              }}
            >
              搜索
            </Button>
          </div>
        </CollapseItem>
      </Collapse>

      <Picker
        isVisible={isVisible1}
        listData={showList}
        onConfirm={values => {
          const value = values[0];
          showList.some(e => {
            if (e.value === value) {
              queryInfoHandle(draft => {
                return { ...draft, [showName]: e.text };
              });
              return true;
            }
          });
        }}
        onClose={() => setIsVisible1(false)}
      />
    </div>
  );
};

export default Natural;
