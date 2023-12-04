import { createAction, props } from '@ngrx/store';

import { Product } from '../../models/product.model';

export const loadProducts = createAction('[Products] Load Products');

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: Error }>()
);

export const searchProductByName = createAction(
  '[Products] Search Products By Name',
  props<{ productName: string | null }>()
);

export const sortProductByField = createAction(
  '[Products] Sort Products By Field',
  props<{ field: string }>()
);
