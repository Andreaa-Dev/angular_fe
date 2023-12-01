import { createAction, props } from '@ngrx/store';

import { User, UserState } from '../../models/user.model';

export const signUpUser = createAction(
  '[User] Sign Up User',
  props<{ user: User }>()
);

export const signUpUserSuccess = createAction(
  '[User] Sign Up User Success',
  props<{ user: UserState }>()
);

export const signUpUserFailure = createAction(
  '[User] Sign Up User Failure',
  props<{ error: any }>()
);

export const logInUserSuccess = createAction(
  '[User] Log In User Success',
  props<{ user: User }>()
);
