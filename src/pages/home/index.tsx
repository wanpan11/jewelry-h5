import { useContext, useState } from "react";
import { Swiper, SwiperItem } from "@nutui/nutui-react";
import { Badge, Cell } from "@nutui/nutui-react";
import { tab } from "@src/config";
import lessStyle from "./index.module.less";
import { useNavigate } from "react-router-dom";
import MobxContext from "@src/store/context";
import diamond from "@src/assets/images/diamond.svg";
import banner_1 from "@src/assets/images/banner_1.jpg";

const Home = () => {
  const [initPage1] = useState(0);
  const navigate = useNavigate();
  const store = useContext(MobxContext);

  return (
    <div className="demo-box">
      <Swiper
        height="auto"
        paginationColor="#426543"
        paginationBgColor="#426ddd"
        autoPlay="3000"
        initPage={initPage1}
        paginationVisible
      >
        <SwiperItem>
          <img
            style={{ width: "100%", display: "block" }}
            src={banner_1}
            alt=""
          />
        </SwiperItem>
      </Swiper>

      <Cell style={{ margin: "0" }}>
        {tab.map(e => {
          return (
            <Badge key={e.id}>
              <div
                className={lessStyle.tab_box}
                onClick={() => {
                  navigate(e.path);
                  store.setTopLevel(false);
                }}
              >
                <div className={lessStyle.tab_item}>
                  <img src={diamond} alt="" className={lessStyle.tab_icon} />
                </div>

                <div className={lessStyle.tab_label}>{e.label}</div>
              </div>
            </Badge>
          );
        })}
      </Cell>
    </div>
  );
};

export default Home;
