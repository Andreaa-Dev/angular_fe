import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppState } from 'src/store/store';
import * as UserActions from '../../store/actions/user.actions';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  logInForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    this.store.dispatch(
      UserActions.logInUserSuccess({ user: this.logInForm.value })
    );
  }
}
