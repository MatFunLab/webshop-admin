import { Product } from "./product.model";
import { Bag } from "./bag.model";

export class OrderItems {
    id: number;
    quantity: number;
    bagId: Bag;
    productId: Product;
  
} 