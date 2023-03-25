import { memo } from "react";
import { Skeleton } from "@nutui/nutui-react";
// import lessStyle from "./index.module.less";
// import classnames from "classnames";

// interface LoadingProps {
//   full: boolean;
// }

const Loading = () => {
  return <Skeleton width="250px" height="15px" animated />;
};

export default memo(Loading);
