import { createAction, props } from '@ngrx/store';
import { ProductCart } from 'src/models/cart.model';
import { Product } from 'src/models/product.model';

export const addProductCart = createAction(
  '[Cart] Add Product To Cart',
  props<{ product: Product }>()
);

export const increaseQuantity = createAction('[Cart] Increase Quantity Cart');

export const decreaseQuantity = createAction('[Cart] Decrease Quantity Cart');
