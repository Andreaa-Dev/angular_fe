import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from 'src/models/product.model';
import { AppState } from 'src/store/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  productFavorite$!: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.productFavorite$ = this.store.select('productFavorite');
  }
}
