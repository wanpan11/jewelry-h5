/* eslint-disable @typescript-eslint/no-namespace */
export interface AxiosRes<T> {
  code: number;
  data: T;
}

type PageInfo<T> = {
  pageNum: number;
  pageSize: number;
  total: number;
  totalPage: number;
  list: T[];
};

export namespace NaturalApi {
  export type ListReq = {
    pageNum: number;
    pageSize: number;
  };

  export type ListRes = PageInfo<{
    deliveryTime: string;
    origin: string;
    shape: string;
    color: string;
    neatness: string;
    cut: string;
    polishing: string;
    symmetry: string;
    certificate: string;
    fluorescence: string;
  }>;
}
