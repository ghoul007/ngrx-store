import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators/map";
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app-state'
import * as userActions from '../../actions/user.action';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$: Observable<Object>;
  constructor(
    private store: Store<AppState>
    // private userService: UserService
  ) {
    this.deleteUser = this.deleteUser.bind(this);
    this.users$ = this.store.select(state => state.users)
  }

  ngOnInit() {
    this.getUsers();
  }


  getUsers() {
    // this.users$ = this.userService.getUsers()
    this.store.dispatch(new userActions.LoadUserAction())
  }


  deleteUser(id) {
    this.userService.deleteUsers(id).subscribe(res => {
      this.users$ = this.userService.getUsers().pipe(map(r => Object(r).filter(f => f['id'] !== id)));
      console.log(this.users$.subscribe(console.log));
    });
  }
}
