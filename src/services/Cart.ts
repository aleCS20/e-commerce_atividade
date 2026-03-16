import { Product } from "../models/Product";
import { CartItem } from "../models/Product";

export class Cart {
  private items: CartItem[] = [];

    //Adiciona um produto ao carrinho. Se já existir, incrementa a 
    //quantidade usando .some() e .find().

  public addItem(product: Product, quantity: number): void {
    const hasItem = this.items.some(item => item.product.id === product.id);

    if (hasItem) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      }
    } else {
      this.items.push({ product, quantity });
    }
  }

  //Calcula o total de unidades no carrinho utilizando .reduce().
   
  public getTotalItems(): number {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

    //Calcula o valor monetário total utilizando .reduce().

  public getFinalPrice(): number {
    return this.items.reduce((acc, item) => {
      return acc + (item.product.price * item.quantity);
    }, 0);
  }

  public listItems(): CartItem[] {
    return [...this.items];
  }
}

