import request from "@src/api/request";
import type { NaturalApi } from "../types/api";

export const naturalService = {
  list: (data: NaturalApi.ListReq) => {
    return request.send<NaturalApi.ListRes>("/api/natural/list", "post", data);
  },
};
