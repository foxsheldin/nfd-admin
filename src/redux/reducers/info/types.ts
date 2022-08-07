export interface IInfoInitialState {
  carsData: ICarsResponseData | null;
  categoriesData: ICategoriesResponseData | null;
  rateData: IRateResponseData | null;
  rateTypeData: IRateTypeResponseData | null;
  citiesData: ICitiesResponseData | null;
  orderStatusData: IOrderStatusResponseData | null;
  currentOffsetCars: number;
  limitLoadingCars: number;
}

export interface ICarsResponseData {
  count: number;
  data: Array<ICarsData>;
}

interface ICarsData {
  updatedAt: number;
  createdAt: number;
  priceMax: number;
  priceMin: number;
  name: string;
  thumbnail: {
    size: number;
    originalname: string;
    mimetype: string;
    path: string;
  };
  description: string;
  categoryId: {
    name: string;
    description: string;
    id: string;
  };
  number: string;
  tank: number;
  colors: Array<string>;
  id: string;
}

export interface ICategoriesResponseData {
  count: number;
  data: Array<ICategoriesData>;
}

interface ICategoriesData {
  updatedAt: number;
  createdAt: number;
  name: string;
  description: string;
  id: string;
}

export interface IRateResponseData {
  count: number;
  data: Array<IRateData>;
}

interface IRateData {
  updatedAt: number;
  createdAt: number;
  price: number;
  rateTypeId: {
    name: string;
    unit: string;
    id: string;
  };
  id: string;
}

export interface IRateTypeResponseData {
  count: number;
  data: Array<IRateTypeData>;
}

interface IRateTypeData {
  name: string;
  unit: string;
  id: string;
}

export interface ICitiesResponseData {
  count: number;
  data: Array<ICitiesData>;
}

interface ICitiesData {
  updatedAt: number;
  createdAt: number;
  name: string;
  id: string;
}

export interface IOrderStatusResponseData {
  count: number;
  data: Array<IOrderStatusData>;
}

interface IOrderStatusData {
  name: string;
  id: string;
}
