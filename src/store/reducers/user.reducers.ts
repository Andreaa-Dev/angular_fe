import { createReducer, on } from '@ngrx/store';

import * as UsersActions from '../actions/user.actions';
import { User, UserState } from '../../models/user.model';

export const initialUserState = {
  userSignUp: {
    email: '',
    password: '',
    name: '',
    avatar: '',
    role: '',
    id: 0,
  },
  userLogIn: {
    email: '',
    password: '',
  },
};

export const usersReducer = createReducer(
  initialUserState,
  on(UsersActions.signUpUserSuccess, (state, { user }) => user),
  on(UsersActions.logInUserSuccess, (state, { response }) => {
    // save token in local storage
    return response;
  })
);
