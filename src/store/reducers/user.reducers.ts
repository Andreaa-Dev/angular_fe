import { createReducer, on } from '@ngrx/store';

import * as UsersActions from '../actions/user.actions';
import { User } from '../../models/user.model';

export const initialUserState: User = {
  email: '',
  password: '',
  name: '',
  avatar: '',
  role: '',
  id: 0,
};

export const usersReducer = createReducer(
  initialUserState,
  on(UsersActions.signUpUserSuccess, (state, { user }) => user),

  on(UsersActions.logInUserSuccess, (state, { response }) => {
    // save token in local storage
    localStorage.setItem('userTokenAngular', response.access_token);
    return state;
  })
);
