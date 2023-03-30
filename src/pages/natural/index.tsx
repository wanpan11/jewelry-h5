import {
  Cell,
  Picker,
  Collapse,
  CollapseItem,
  Button,
  Table,
} from "@nutui/nutui-react";
import lessStyle from "./index.module.less";
import { useState } from "react";
import { queryObj, queryList } from "@src/config";
import { naturalService } from "@src/api/natural";
import { useRequest } from "ahooks";
import { NaturalApi } from "@src/types/api";

const Natural = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [activeName, activeNameHandle] = useState("");
  const [queryInfo, queryInfoHandle] = useState<Record<string, string>>({});
  const [showName, showNameHandle] = useState<string | null>(null);

  const { data, run } = useRequest(naturalService.list, {
    defaultParams: [{ pageNum: 1, pageSize: 10 }],
  });

  const showList = showName ? queryObj[showName] : [];

  const columns = [
    { title: "货期", key: "deliveryTime" },
    {
      title: "供货商",
      key: "2",
      render(record: NaturalApi.ListRes["list"][number]) {
        return <div>{record.origin}</div>;
      },
    },
    { title: "钻石信息", key: "3" },
  ];

  return (
    <div>
      <Collapse
        activeName={[activeName]}
        icon="arrow-down"
        iconSize="16"
        iconColor="#999"
        onChange={(open, name) => {
          activeNameHandle(open ? name : "");
        }}
        className={lessStyle.query_box}
      >
        <CollapseItem title="查询条件" name="1">
          {queryList.map(e => {
            return (
              <Cell
                key={e.name}
                isLink
                title={e.label}
                // @ts-ignore
                desc={
                  queryInfo[e.name] ? (
                    <div className={lessStyle.query_text}>
                      {queryInfo[e.name]}
                    </div>
                  ) : (
                    <div>点击选择</div>
                  )
                }
                onClick={() => {
                  setIsVisible1(!isVisible1);
                  showNameHandle(e.name);
                }}
              />
            );
          })}

          <div className={lessStyle.button_box}>
            <Button
              type="primary"
              block
              onClick={() => {
                run({ pageNum: 1, pageSize: 10, ...queryInfo });
                activeNameHandle("");
              }}
            >
              搜索
            </Button>
          </div>
        </CollapseItem>
      </Collapse>

      <div className={lessStyle.table}>
        <Table columns={columns} data={data?.data.list || []} />
      </div>

      <Picker
        isVisible={isVisible1}
        listData={showList}
        onConfirm={values => {
          const value = values[0];

          if (!showName) return;
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
