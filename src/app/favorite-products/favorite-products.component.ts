import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Product } from 'src/models/product.model';
import { AppState } from 'src/store/store';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.css'],
})
export class FavoriteProductsComponent {
  productFavorite$!: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.productFavorite$ = this.store.select('productFavorite');
  }
}
