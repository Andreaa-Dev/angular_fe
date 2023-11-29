import { createAction, props } from '@ngrx/store';
import { Product } from 'src/models/product.model';

export const loadProductFavorite = createAction(
  '[ProductFavorite] Load Product Favorite',
  props<{ product: Product }>()
);
