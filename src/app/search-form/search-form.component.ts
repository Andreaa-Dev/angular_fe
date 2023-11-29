import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  searchForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      userInput: ['Please enter the product name', [Validators.required]],
    });
  }

  onSubmit() {
    // dispatch search product by name
    console.log(this.searchForm.value);
  }
}
