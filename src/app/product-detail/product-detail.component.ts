import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.productDetail$ = this.store.select('productDetail');
    console.log(this.productDetail$, 'detail');
    this.store.dispatch(
      ProductDetailActions.loadProductDetail({
        productId: this.route.snapshot.paramMap.get('id') as string,
      })
    );
    // this.store.dispatch(ProductDetailActions.loadProductDetail());
  }
}
