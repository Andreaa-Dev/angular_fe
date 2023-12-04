import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppState } from 'src/store/store';
import * as UserActions from '../../store/actions/user.actions';
import { RoleService } from '../services/role.services';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  logInForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private roleService: RoleService
  ) {
    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    this.store.dispatch(UserActions.logInUser({ user: this.logInForm.value }));
    this.router.navigate(['/profile']);
    this.roleService.setUserRoles(['admin']);
  }
}
