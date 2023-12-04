import { createReducer, on } from '@ngrx/store';

import * as ProductDetailActions from '../actions/productDetail.actions';
import { Product } from '../../models/product.model';

// initial state better null
export const initialProductDetailState: Product = {
  id: 0,
  title: '',
  description: '',
  price: 0,
  images: [],
};

export const productDetailReducer = createReducer(
  initialProductDetailState,
  on(
    ProductDetailActions.loadProductDetailSuccess,
    (state, { productDetail }) => productDetail
  )
);
