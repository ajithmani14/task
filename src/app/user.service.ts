import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json'
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}

