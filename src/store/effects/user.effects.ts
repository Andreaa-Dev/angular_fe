import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as UsersActions from '../actions/user.actions';
import { UsersService } from '../../app/services/users.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  signUpUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.userActions),
      mergeMap((action) =>
        this.usersService
          .signUpUser({
            email: 'nico@gmail.com',
            password: '1234',
          })
          .pipe(
            map((user) => UsersActions.signUpUserSuccess({ user })),
            catchError((error) => of(UsersActions.signUpUserFailure({ error })))
          )
      )
    )
  );
}
