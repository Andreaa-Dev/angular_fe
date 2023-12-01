import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as UserActions from '../../store/actions/user.actions';
import { AppState } from '../../store/store';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      name: ['', Validators.required],
      avatar: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.registerForm.value, 'value');
    this.store.dispatch(UserActions.signUpUser(this.registerForm.value));
  }
}
