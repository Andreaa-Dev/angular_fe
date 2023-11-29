import { ActionReducerMap } from '@ngrx/store';

import { Product } from 'src/models/product.model';
import { ProductsState } from '../models/products.model';
import { productsReducer } from './reducers/products.reducer';
import { productDetailReducer } from './reducers/productDetail.reducer';

export interface AppState {
  products: ProductsState;
  productDetail: Product;
}

export const reducers: ActionReducerMap<AppState> = {
  products: productsReducer,
  productDetail: productDetailReducer,
};
