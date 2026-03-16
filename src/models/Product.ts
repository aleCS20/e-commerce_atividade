import { Category } from "./Category";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

