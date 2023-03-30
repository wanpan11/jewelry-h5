import { lazy } from "react";

const getLazyLoad = (url: string) => lazy(() => import(`@src/pages${url}`));

/**
 *
 * @description 嵌套路由配置 react-router-dom V6 参考：https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
 * @param {path} * 表示无匹配时 渲染此项
 * @param {index} 默认渲染此项 index path 不能同时存在
 * @param {title} 每个对应组件会接收到 title
 * @param {component} 对应组件 采用 lazy 懒加载模式
 * @param {childrenList} 嵌套路由 可以在父路由组件内嵌 渲染
 *
 */
const routers: Route[] = [
  {
    id: "1",
    path: "/",
    title: "",
    component: getLazyLoad("/"),
    childrenList: [
      {
        id: "11",
        index: true,
        title: "首页",
        component: getLazyLoad("/home"),
      },
      {
        id: "12",
        path: "/natural",
        title: "白钻-天然钻",
        component: getLazyLoad("/natural"),
      },
    ],
  },
];

export default routers;
