import { createAction, props } from '@ngrx/store';
import { ProductCart } from 'src/models/cart.model';

export const addProductCart = createAction(
  '[Cart] Load Cart',
  props<{ cart: ProductCart }>()
);
