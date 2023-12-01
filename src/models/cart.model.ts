import { Product } from './product.model';

export type ProductCart = Product & { quantity: number };
export type CartState = ProductCart[];
