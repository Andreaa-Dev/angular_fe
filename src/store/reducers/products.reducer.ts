import { createReducer, on } from '@ngrx/store';

import * as ProductsActions from '../actions/products.actions';
import { ProductsState } from '../../models/products.model';

export const initialProductState: ProductsState = [];

export const productsReducer = createReducer(
  initialProductState,
  on(ProductsActions.loadProductsSuccess, (state, { products }) => products),

  on(ProductsActions.searchProductByName, (state, { productName }) => {
    if (!productName) {
      return state;
    }
    return state.filter((product) =>
      product.title
        .toLocaleLowerCase()
        .includes(productName.toLocaleLowerCase())
    );
  }),

  on(ProductsActions.sortProductByField, (state, { field }) => {
    if (field === 'lowestPrice') {
      const sortedItems = [...state].sort((a, b) => a.price - b.price);
      console.log(sortedItems, 'sorted');
      return sortedItems;
    }
    return state;
  })
);
