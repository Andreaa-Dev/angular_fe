import { createReducer, on } from '@ngrx/store';

import * as CartActions from '../actions/cart.actions';
import { CartState } from 'src/models/cart.model';

export const initialCartState: CartState = [];

export const productFavoriteReducer = createReducer(
  initialCartState,
  on(CartActions.addProductCart, (state, { cart }) => [...state, cart])
);
