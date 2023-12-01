import { createAction, props } from '@ngrx/store';

import { User } from '../../models/user.model';

export const userActions = createAction('[Users] User Log In');

export const signUpUserSuccess = createAction(
  '[User] Sign Up User Success',
  props<{ user: User }>()
);

export const signUpUserFailure = createAction(
  '[User] Sign Up User Failure',
  props<{ error: any }>()
);
