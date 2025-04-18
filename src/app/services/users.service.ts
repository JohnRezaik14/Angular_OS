import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private readonly http: HttpClient) {}
  getAllUsers() {
    return this.http.get(this.URL);
  }
  getUserByID(id: number) {
    return this.http.get(this.URL + '/' + id);
  }
  addUser(user: any) {
    return this.http.post(this.URL, user);
  }
  editUser(user: any) {
    return this.http.post(this.URL, user);
  }
  deleteUser(id: number) {
    return this.http.get(this.URL + '/' + id);
  }
}
