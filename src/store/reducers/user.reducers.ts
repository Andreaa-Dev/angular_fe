import { createReducer, on } from '@ngrx/store';

import * as UsersActions from '../actions/user.actions';
import { User } from '../../models/user.model';

export const initialProductState: User = {
  name: '',
  email: '',
  password: '',
  avatar: '',
};

export const usersReducer = createReducer(
  initialProductState,
  on(UsersActions.signUpUserSuccess, (state, { user }) => user)
);
