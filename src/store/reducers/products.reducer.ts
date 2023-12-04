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
    // shorten logic here
    // use switch?
    if (field === 'lowestPrice') {
      const sortedItems = [...state].sort((a, b) => a.price - b.price);
      return sortedItems;
    }
    if (field === 'highestPrice') {
      const sortedItems = [...state].sort((a, b) => b.price - a.price);
      return sortedItems;
    }
    if (field === 'AtoZ') {
      const sortedItems = [...state].sort((a, b) => {
        const productTitleA = a.title.toUpperCase();
        const productTitleB = b.title.toUpperCase();
        if (productTitleA < productTitleB) {
          return -1;
        }
        return 0;
      });
      return sortedItems;
    }
    if (field === 'ZtoA') {
      const sortedItems = [...state].sort((a, b) => {
        const productTitleA = a.title.toUpperCase();
        const productTitleB = b.title.toUpperCase();
        if (productTitleA > productTitleB) {
          return -1;
        }
        return 0;
      });
      return sortedItems;
    }
    return state;
  })
);
