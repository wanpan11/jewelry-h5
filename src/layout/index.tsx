import { Tabbar, TabbarItem } from "@nutui/nutui-react";
import lessStyle from "./index.module.less";

const AppLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className={lessStyle.app_content}>
      {children}

      <Tabbar
        className={lessStyle.tab}
        onSwitch={(child, idx) => {
          console.log(idx);
        }}
      >
        <TabbarItem tabTitle="首页" icon="home" />
        <TabbarItem tabTitle="分类" icon="category" />
        <TabbarItem tabTitle="发现" icon="find" />
        <TabbarItem tabTitle="购物车" icon="cart" />
        <TabbarItem tabTitle="我的" icon="my" />
      </Tabbar>
    </div>
  );
};

export default AppLayout;
