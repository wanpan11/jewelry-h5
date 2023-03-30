import { Tabbar, TabbarItem, NavBar } from "@nutui/nutui-react";
import lessStyle from "./index.module.less";
import store from "@src/store/store";
import { observer } from "mobx-react-lite";
import MobxContext from "@src/store/context";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AppLayout = observer(({ children }: { children: JSX.Element }) => {
  const { topLevel, routerMap } = store;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/") {
      store.setTopLevel(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={lessStyle.app_content}>
      <MobxContext.Provider value={store}>
        {topLevel ? (
          <>
            {children}

            <Tabbar
              className={lessStyle.bottom_tab}
              onSwitch={(child, idx) => {
                console.log(idx);
              }}
            >
              <TabbarItem tabTitle="首页" icon="home" />
              <TabbarItem tabTitle="发现" icon="find" />
              <TabbarItem tabTitle="我的" icon="my" />
            </Tabbar>
          </>
        ) : (
          <>
            <NavBar
              className={lessStyle.top_tab}
              title={routerMap[pathname]}
              leftShow
              onClickBack={() => {
                store.setTopLevel(true);
                navigate("/");
              }}
            />

            {children}
          </>
        )}
      </MobxContext.Provider>
    </div>
  );
});

export default AppLayout;
