export type ParamsDevice = {
  name: string;
  brand: string;
  processor: string;
  ram: string;
  storage: string;
  screen: string;
  os: string;
  price: string;
  stack: number;
  discount: boolean;
  discount_percentage: number;
  image: string;
};

export type DeviceType = {
  id: number;
  name: string;
  brand: string;
  processor: string;
  ram: string;
  storage: string;
  screen: string;
  os: string;
  price: string;
  stack: number;
  discount: boolean;
  discount_percentage: number;
  image: string;
  created_at: Date;
};
