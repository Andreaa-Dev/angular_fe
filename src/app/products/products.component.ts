import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ProductsActions from '../../store/actions/products.actions';
import * as ProductFavoriteActions from '../../store/actions/productFavorite.actions';

import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { AppState } from '../../store/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  productFavorite$!: Observable<Product[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.products$ = this.store.select('products');
    console.log(this.products$, 'list');
    // Dispatch the loadProducts action when the component initializes
    this.store.dispatch(ProductsActions.loadProducts());
  }

  addFavoriteHandler(product: Product) {
    this.productFavorite$ = this.store.select('productFavorite');

    this.store.dispatch(
      ProductFavoriteActions.loadProductFavorite({ product: product })
    );
  }
}
