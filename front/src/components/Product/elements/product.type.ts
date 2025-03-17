export type Cellphone = {
  id: number;
  name: string;
  details: Details;
  price: number;
  stack: number;
  discount: boolean;
  discountPercentage: number;
  image: string;
};

export type Details = {
  marca: string;
  procesador: string;
  ram: string;
  almacenamiento: string;
  pantalla: string;
  os: string;
};

export enum Almacenamiento {
  The128GB = "128GB",
  The1TB = "1TB",
  The512GB = "512GB",
  The64GB = "64GB",
}

export enum OS {
  Android13 = "Android 13",
  Android14 = "Android 14",
  HarmonyOS3 = "HarmonyOS 3",
  IOS17 = "iOS 17",
}
