// Enums e Tipos Literais
export enum UserRole {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER"
}

// Interfaces ============
interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}

interface CartItem {
  product: Product;
  quantity: number;
}
