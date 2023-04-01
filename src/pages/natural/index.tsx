import {
  Cell,
  Picker,
  Collapse,
  CollapseItem,
  Button,
  Skeleton,
} from "@nutui/nutui-react";
import lessStyle from "./index.module.less";
import { useState } from "react";
import { queryObj, queryList } from "@src/config";
import { naturalService } from "@src/api/natural";
import { useRequest } from "ahooks";
import {
  Shape,
  Color,
  Neatness,
  Cut,
  Polishing,
  Symmetry,
  Certificate,
  Fluorescence,
} from "@src/config";

const Natural = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [activeName, activeNameHandle] = useState("");
  const [queryInfo, queryInfoHandle] = useState<Record<string, string>>({});
  const [queryText, queryTextHandle] = useState<Record<string, string>>({});
  const [showName, showNameHandle] = useState<string>("");

  const { data, loading, run } = useRequest(naturalService.list, {
    // @ts-ignore
    defaultParams: [{ pageNum: 1, pageSize: 10 }],
  });

  const showList = showName ? queryObj[showName] : [];

  return (
    <div>
      <Collapse
        activeName={activeName ? [activeName] : []}
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
                  queryText[e.name] ? (
                    <div className={lessStyle.query_text}>
                      {queryText[e.name]}
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
              onClick={() => {
                queryTextHandle({});
                queryInfoHandle({});
              }}
            >
              重置
            </Button>

            <Button
              type="primary"
              onClick={() => {
                // @ts-ignore
                run({ pageNum: 1, pageSize: 10, ...queryInfo });
                activeNameHandle("");
              }}
            >
              搜索
            </Button>
          </div>
        </CollapseItem>
      </Collapse>

      <div className={lessStyle.list}>
        {!loading ? (
          <div className={lessStyle.table}>
            {data?.data.list.map((e, i) => {
              return (
                <div key={i} className={lessStyle.item}>
                  <div className={lessStyle.info_box}>
                    <div className={lessStyle.title}>货源信息</div>

                    <div className={lessStyle.content}>
                      <span>
                        <span>货期：</span>
                        {e.deliveryTime}
                      </span>
                      <span>
                        <span>地点：</span>
                        {e.origin}
                      </span>
                      <span>
                        <span>供应商：</span>
                        {e.supplier}
                      </span>
                    </div>
                  </div>

                  <div className={lessStyle.info_box}>
                    <div className={lessStyle.title}>货品信息</div>

                    <div className={lessStyle.content}>
                      <span>
                        <span>形状：</span>
                        {Shape[e.shape]}
                      </span>
                      <span>
                        <span>颜色：</span>
                        {Color[e.color]}
                      </span>
                      <span>
                        <span>净度：</span>
                        {Neatness[e.neatness]}
                      </span>
                      <span>
                        <span>切工：</span>
                        {Cut[e.cut]}
                      </span>
                      <span>
                        <span>抛光：</span>
                        {Polishing[e.polishing]}
                      </span>
                      <span>
                        <span>对称：</span>
                        {Symmetry[e.symmetry]}
                      </span>
                      <span>
                        <span>证书：</span>
                        {Certificate[e.certificate]}
                      </span>
                      <span>
                        <span>荧光：</span>
                        {Fluorescence[e.fluorescence]}
                      </span>
                      <span>
                        <span>克拉：</span>
                        {e.karat}
                      </span>
                      <span>
                        <span>尺寸：</span>
                        {e.size}
                      </span>
                    </div>
                  </div>

                  <div className={lessStyle.btn_box}>
                    <Button>详情</Button>
                    <Button>联系</Button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Skeleton width="100vw" height="20px" row={20} round animated />
        )}
      </div>

      <Picker
        isVisible={isVisible1}
        listData={showList}
        onConfirm={(_, [item]) => {
          showList.some(e => {
            if (e.value === item.value) {
              queryInfoHandle(draft => {
                return { ...draft, [showName]: item.value.toString() };
              });
              queryTextHandle(draft => {
                return { ...draft, [showName]: item.text as string };
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
