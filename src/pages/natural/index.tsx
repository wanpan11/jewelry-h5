import { Badge, Avatar, Cell } from "@nutui/nutui-react";
import { tab } from "@src/config";
import lessStyle from "./home.module.less";
import { useNavigate } from "react-router-dom";

const Natural = () => {
  const navigate = useNavigate();

  return (
    <div className="demo-box">
      <div>查询条件</div>

      <Cell>
        {tab.map(e => {
          return (
            <Badge key={e.id}>
              <div
                className={lessStyle.tab_box}
                onClick={() => {
                  navigate(e.path);
                }}
              >
                <Avatar icon="my" shape="square" />
                <div className={lessStyle.tab_label}>{e.label}</div>
              </div>
            </Badge>
          );
        })}
      </Cell>
    </div>
  );
};

export default Natural;
