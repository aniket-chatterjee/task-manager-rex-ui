import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { User, UserDropdownModel } from './store/models/user.model';
import { Store } from '@ngrx/store';

import * as Actions from 'src/app/store/actions/user.actions';
import { Action } from 'rxjs/internal/scheduler/Action';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'awaz-de-app';
  users: UserDropdownModel[];
  users$: Observable<User[]> = this.store.select(
    (state) => state.usersState.users
  );
  // .subscribe((v) => this.users.push(v));
  private nameBackgrounds: string[] = [
    '#680000',
    '#990099',
    '#FFCC33',
    '#3300CC',
    '#330000',
    '#003300',
    '#0033FF',
  ];
  onNewUserSelect(event: any) {
    const changedValue = this.users.filter((u) => u.value == event.value)[0];

    if (!isNullOrUndefined(changedValue))
      this.store.dispatch(Actions.selectLoginUser({ user: changedValue }));
  }
  selectedUser: Observable<UserDropdownModel> = this.store.select(
    (s) => s.usersState.selectedUser
  );
  constructor(private store: Store<{ usersState }>) {
    this.store.dispatch(Actions.loadUsers());
    this.users$.subscribe(
      (result) =>
        (this.users = result.map((r) => {
          return {
            label: r.username,
            value: r.id,
            color: this.getRandomColor(r.username),
            payload: r,
          } as UserDropdownModel;
        }))
    );
  }

  getRandomColor(name: string) {
    const currentTimeInSec: number = parseInt(
      (new Date().getTime() / 1000).toString()
    );
    const selectedIndex =
      (name.charCodeAt(0) + currentTimeInSec) % this.nameBackgrounds.length;
    return this.nameBackgrounds[selectedIndex];
  }
}
