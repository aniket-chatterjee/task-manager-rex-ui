import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/store/user/user.model';
import { Observable } from 'rxjs';
import * as Actions from 'src/app/store/user/user.actions';
import { UserCardComponent } from 'src/app/components/user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userCard = UserCardComponent;
  users$: Observable<User[]> = this.store.select(
    (state) => state.usersState.users
  );
  total: Observable<number> = this.store.select(
    (state) => state.usersState.count
  );

  constructor(private store: Store<{ usersState }>) {}

  ngOnInit(): void {
    this.store.dispatch(Actions.loadUsers());
  }
}
