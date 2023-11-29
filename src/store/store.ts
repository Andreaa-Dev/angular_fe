import { ActionReducerMap } from '@ngrx/store';

import { Product } from 'src/models/product.model';
import { ProductsState } from '../models/products.model';
import { productsReducer } from './reducers/products.reducer';
import { productDetailReducer } from './reducers/productDetail.reducer';
import { ProductFavoriteState } from 'src/models/productFavorite.model';
import { productFavoriteReducer } from './reducers/productFavorite.reducer';

export interface AppState {
  products: ProductsState;
  productDetail: Product;
  productFavorite: ProductFavoriteState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: productsReducer,
  productDetail: productDetailReducer,
  productFavorite: productFavoriteReducer,
};
