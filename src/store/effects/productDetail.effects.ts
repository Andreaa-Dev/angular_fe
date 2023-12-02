import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as ProductDetailActions from '../actions/productDetail.actions';
import { ProductDetailService } from '../../app/services/productDetail.service';
import { Error } from 'src/misc/types';

@Injectable()
export class ProductDetailEffects {
  constructor(
    private actions$: Actions,
    private productDetailService: ProductDetailService // Inject the ProductsService
  ) {}

  loadProductDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductDetailActions.loadProductDetail),
      mergeMap((action) =>
        this.productDetailService.getProductDetailById(action.productId).pipe(
          map((productDetail) =>
            ProductDetailActions.loadProductDetailSuccess({ productDetail })
          ),
          catchError((error) =>
            of(ProductDetailActions.loadProductDetailFailure({ error }))
          )
        )
      )
    )
  );
}
