import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:9091/user';

  login(data: { email: string; password: string }) {
    return this.http.post(`http://localhost:9091/login`, data);
  }
  register(newuser: User) {
    return this.http.post<User>(`${this.apiUrl}/add`, newuser);
  }
}
