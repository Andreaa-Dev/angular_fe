import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/store/store';
import * as ProductsActions from '../../store/actions/products.actions';

@Component({
  selector: 'app-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: ['./sort-form.component.css'],
})
export class SortFormComponent {
  constructor(private store: Store<AppState>) {}

  onSortOptionChange(event: Event) {
    const field = (event.target as HTMLSelectElement).value;
    console.log(field, 'sort');
    this.store.dispatch(ProductsActions.sortProductByField({ field }));
  }
}
