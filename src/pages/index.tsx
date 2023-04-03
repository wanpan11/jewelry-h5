import AppLayout from "@src/layout";
import { ConfigProvider } from "@nutui/nutui-react";

const darkTheme = {
  nutuiBrandColor: "#008cfe ",
  nutuiBrandColorStart: "#008cfe ",
  nutuiBrandColorEnd: "#008cfe ",
};

const System = ({ children }: PageProps) => {
  return (
    <ConfigProvider theme={darkTheme}>
      <AppLayout>{children}</AppLayout>
    </ConfigProvider>
  );
};

export default System;
