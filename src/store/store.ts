import { ActionReducerMap } from '@ngrx/store';

import { User } from 'src/models/user.model';
import { Product } from 'src/models/product.model';
import { ProductsState } from '../models/products.model';
import { ProductFavoriteState } from 'src/models/productFavorite.model';
import { CartState } from 'src/models/cart.model';
import { productsReducer } from './reducers/products.reducer';
import { productDetailReducer } from './reducers/productDetail.reducer';
import { productFavoriteReducer } from './reducers/productFavorite.reducer';
import { usersReducer } from './reducers/user.reducers';
import { cartReducer } from './reducers/ cart.reducers';

export interface AppState {
  products: ProductsState;
  productDetail: Product;
  productFavorite: ProductFavoriteState;
  users: User;
  cart: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: productsReducer,
  productDetail: productDetailReducer,
  productFavorite: productFavoriteReducer,
  users: usersReducer,
  cart: cartReducer,
};
