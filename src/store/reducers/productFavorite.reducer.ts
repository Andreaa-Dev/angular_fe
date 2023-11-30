import { createReducer, on } from '@ngrx/store';

import { Product } from '../../models/product.model';
import * as ProductFavoriteActions from '../actions/productFavorite.actions';
import { ProductFavoriteState } from 'src/models/productFavorite.model';

export const initialProductFavoriteState: ProductFavoriteState = [];

export const productFavoriteReducer = createReducer(
  initialProductFavoriteState,
  on(ProductFavoriteActions.loadProductFavorite, (state, { product }) =>
    // ({ ...state, products: [...state.products, product] }))
    [...state, product]
  )
);
