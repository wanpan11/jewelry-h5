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
  export type NaturalInfo = {
    deliveryTime: number;
    origin: string;
    supplier: string;
    shape: number;
    color: number;
    neatness: number;
    cut: number;
    polishing: number;
    symmetry: number;
    certificate: number;
    fluorescence: number;
    karat: number;
    size: string;
  };

  export type ListReq = {
    pageNum?: number;
    pageSize?: number;
  } & NaturalInfo;

  export type ListRes = PageInfo<NaturalInfo>;
}
