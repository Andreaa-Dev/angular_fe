import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Product } from 'src/models/product.model';
import { AppState } from 'src/store/store';
import * as ProductDetailActions from '../../store/actions/productDetail.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productDetail$!: Observable<Product>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.productDetail$ = this.store.select('productDetail');
    this.store.dispatch(ProductDetailActions.loadProductDetail());
  }
}
