import { Size } from "./product.interface";

export interface CartProduct {
  id?: string;
  slug: string;
  title: string;
  quantity: number;
  size: Size;
  image: string;
  price: number;
}
