interface IOrdersResponseData {
  carId: {
    categoryId?: string;
    colors?: Array<String>;
    description?: string;
    id?: string;
    name?: string;
    number?: string;
    priceMax?: number;
    priceMin?: number;
    thumbnail?: {
      mimetype?: string;
      originalname?: string;
      path?: string;
      size?: number;
    };
  };
  cityId: {
    id?: string;
    name?: string;
  };
  color?: string;
  createdAt?: number;
  dateFrom?: number;
  dateTo?: number;
  id?: string;
  isFullTank?: boolean;
  isNeedChildChair?: boolean;
  isRightWheel?: boolean;
  orderStatusId?: {
    id?: string;
    name?: string;
  };
  pointId?: {
    address?: string;
    id?: string;
    name?: string;
  };
  price?: number;
  updatedAt?: number;
}

export interface IOrdersResponse {
  count: number;
  data: Array<IOrdersResponseData>;
  fileds: Object;
}

export interface IOrdersInitialState {
  ordersData: IOrdersResponse | null;
  countOrders: number | null;
  currentOffset: number;
  limitLoading: number;
}
