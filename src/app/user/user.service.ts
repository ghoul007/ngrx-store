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
    return this.Http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
