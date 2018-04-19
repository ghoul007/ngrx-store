import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators/map";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<Object>;
  constructor(private userService: UserService) {
    this.deleteUser = this.deleteUser.bind(this)
  }

  ngOnInit() {
    this.getUsers();
  }


  getUsers() {
    this.users = this.userService.getUsers()
   
  }


  deleteUser(id) {
    this.userService.deleteUsers(id).subscribe(res=>{
      this.users = this.userService.getUsers().pipe(map(r=>Object(r).filter(f=>f['id']!==id)));
      console.log(this.users.subscribe(console.log));
    });
  }
}
