import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductCart } from 'src/models/cart.model';
import { AppState } from 'src/store/store';
import * as CartsActions from '../../store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  carts$!: Observable<ProductCart[]>;
  @Input() isAlertVisible = false;

  constructor(private store: Store<AppState>) {
    this.carts$ = this.store.select('cart');
  }
  increaseQuantityHandler(cart: ProductCart) {
    this.store.dispatch(CartsActions.increaseQuantity({ cart }));
  }

  decreaseQuantityHandler(cart: ProductCart) {
    this.store.dispatch(CartsActions.decreaseQuantity({ cart }));
  }

  showAlert() {
    this.isAlertVisible = true;
  }
}
