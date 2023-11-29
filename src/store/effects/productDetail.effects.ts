import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import * as ProductDetailActions from '../actions/productDetail.actions';
import { ProductDetailService } from '../../app/services/productDetail.service'; //

@Injectable()
export class ProductDetailEffects {
  constructor(
    private actions$: Actions,
    private productDetailService: ProductDetailService, // Inject the ProductsService
    private route: ActivatedRoute
  ) {}
  // Get productId
  productId = this.route.snapshot.paramMap.get('id') as string;

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductDetailActions.loadProductDetail),
      mergeMap(() =>
        this.productDetailService.getProductDetailById(this.productId).pipe(
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
