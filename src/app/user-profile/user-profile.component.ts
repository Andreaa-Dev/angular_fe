import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from 'src/models/user.model';
import { AppState } from 'src/store/store';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  userProfile$!: Observable<UserState>;
  constructor(private store: Store<AppState>) {
    this.userProfile$ = this.store.select('users');
  }
}
