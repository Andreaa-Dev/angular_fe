import { createAction, props } from '@ngrx/store';

import { User, UserLogIn, UserState } from '../../models/user.model';
import { Error } from 'src/misc/types';

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
  props<{ error: Error }>()
);

export const logInUser = createAction(
  '[User] Sign Up User',
  props<{ user: UserLogIn }>()
);

export const logInUserSuccess = createAction(
  '[User] Log In User Success',
  props<{ response: Response }>()
);

export const loInUserFailure = createAction(
  '[User] Log In User Failure',
  props<{ error: Error }>()
);
