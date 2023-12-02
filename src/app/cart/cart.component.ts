import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartState, ProductCart } from 'src/models/cart.model';
import { AppState } from 'src/store/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  carts$!: Observable<ProductCart[]>;
  constructor(private store: Store<AppState>) {
    this.carts$ = this.store.select('cart');
  }
  increaseQuantityHandler() {
    // this.store.dispatch(CartActions.addProductFavorite());
  }

  decreaseQuantityHandler() {}
}
