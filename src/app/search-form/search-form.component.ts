import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AppState } from 'src/store/store';
import * as ProductsActions from '../../store/actions/products.actions';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  searchForm!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.searchForm = this.fb.group({
    //   userInput: ['Please enter the product name', [Validators.required]],
    // });

    this.searchControl.valueChanges.subscribe((value) => {
      console.log('Search:', value);
      // Add your search logic here
      this.store.dispatch(
        ProductsActions.searchProductByName({ productName: value })
      );
    });
  }

  searchControl = new FormControl('');
  // onSubmit() {
  //   // dispatch search product by name
  //   console.log(this.searchForm.value);
  // }
}
