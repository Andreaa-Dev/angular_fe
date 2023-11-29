import { createAction, props } from '@ngrx/store';

import { Product } from '../../models/product.model';

export const loadProductDetail = createAction(
  '[ProductDetail] Load ProductDetail'
);

export const loadProductDetailSuccess = createAction(
  '[ProductDetail] Load ProductDetail Success',
  props<{ productDetail: Product }>()
);

export const loadProductDetailFailure = createAction(
  '[ProductDetail] Load Product Detail Failure',
  props<{ error: any }>()
);
// ... Similarly for other CRUD actions
