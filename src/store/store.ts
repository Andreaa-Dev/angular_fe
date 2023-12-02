import { ActionReducerMap } from '@ngrx/store';

import { User } from 'src/models/user.model';
import { Product } from 'src/models/product.model';
import { ProductsState } from '../models/products.model';
import { ProductFavoriteState } from 'src/models/productFavorite.model';
import { productsReducer } from './reducers/products.reducer';
import { productDetailReducer } from './reducers/productDetail.reducer';
import { productFavoriteReducer } from './reducers/productFavorite.reducer';
import { usersReducer } from './reducers/user.reducers';

export interface AppState {
  products: ProductsState;
  productDetail: Product;
  productFavorite: ProductFavoriteState;
  users: User;
}

export const reducers: ActionReducerMap<AppState> = {
  products: productsReducer,
  productDetail: productDetailReducer,
  productFavorite: productFavoriteReducer,
  users: usersReducer,
};
