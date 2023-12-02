import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ProductsActions from '../../store/actions/products.actions';
import * as ProductFavoriteActions from '../../store/actions/productFavorite.actions';
import * as CartsActions from '../../store/actions/cart.actions';

import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { AppState } from '../../store/store';
import { ProductCart } from 'src/models/cart.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.products$ = this.store.select('products');
    this.store.dispatch(ProductsActions.loadProducts());
  }

  addFavoriteHandler(product: Product) {
    this.store.dispatch(
      ProductFavoriteActions.addProductFavorite({ product: product })
    );
  }

  addCartHandler(product: Product) {
    this.store.dispatch(CartsActions.addProductCart({ product: product }));
  }
}
