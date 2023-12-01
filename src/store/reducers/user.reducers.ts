import { createReducer, on } from '@ngrx/store';

import * as UsersActions from '../actions/user.actions';
import { User, UserState } from '../../models/user.model';

export const initialProductState: UserState = {
  email: '',
  password: '',
  name: '',
  avatar: '',
  role: '',
  id: 0,
};

export const usersReducer = createReducer(
  initialProductState,
  on(UsersActions.signUpUserSuccess, (state, { user }) => user)
);
