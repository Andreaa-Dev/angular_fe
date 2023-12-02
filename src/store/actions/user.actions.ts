import { createAction, props } from '@ngrx/store';

import { Response, User, UserLogIn, UserSignUp } from '../../models/user.model';
import { Error } from 'src/misc/types';

export const signUpUser = createAction(
  '[User] Sign Up User',
  props<{ user: UserSignUp }>()
);

export const signUpUserSuccess = createAction(
  '[User] Sign Up User Success',
  props<{ user: User }>()
);

export const signUpUserFailure = createAction(
  '[User] Sign Up User Failure',
  props<{ error: Error }>()
);

export const logInUser = createAction(
  '[User] Log In User',
  props<{ user: UserLogIn }>()
);

export const logInUserSuccess = createAction(
  '[User] Log In User Success',
  props<{ response: Response }>()
);

export const logInUserFailure = createAction(
  '[User] Log In User Failure',
  props<{ error: Error }>()
);
