import { createAction, props } from '@ngrx/store';
import { Product } from 'src/models/product.model';

export const addProductFavorite = createAction(
  '[ProductFavorite] Load Product Favorite',
  props<{ product: Product }>()
);
