import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class UserService {

  constructor(private Http: HttpClient) {
  }


  getUsers() {
    return this.Http.get('https://jsonplaceholder.typicode.com/users');
  }

  deleteUsers(id) {
    let res = this.Http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    debugger;
    return res;
  }
}
