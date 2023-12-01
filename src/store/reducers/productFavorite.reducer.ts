import { Action, createReducer, on } from '@ngrx/store';

import { Product } from '../../models/product.model';
import * as ProductFavoriteActions from '../actions/productFavorite.actions';
import { ProductFavoriteState } from 'src/models/productFavorite.model';

export const initialProductFavoriteState: ProductFavoriteState = [];

export const productFavoriteReducer = createReducer(
  initialProductFavoriteState,
  on(ProductFavoriteActions.addProductFavorite, (state, action) => {
    const isIncluded = state.some(
      (product) => product.id === action.product.id
    );
    if (!isIncluded) {
      return [...state, action.product];
    }
    return state;
  })
);
