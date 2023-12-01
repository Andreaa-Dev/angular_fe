import { createReducer, on } from '@ngrx/store';

import * as ProductsActions from '../actions/products.actions';
import { ProductsState } from '../../models/products.model';

export const initialProductState: ProductsState = [];

export const productsReducer = createReducer(
  initialProductState,
  on(ProductsActions.loadProductsSuccess, (state, { products }) => products),
  on(ProductsActions.searchProductByName, (state, { productName }) => {
    return state.filter((product) =>
      product.title
        .toLocaleLowerCase()
        .includes(productName.toLocaleLowerCase())
    );
  })
);
