import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jsonServerUrl = 'http://localhost:3000/adminLogin';
  constructor(private _http: HttpClient) { }
  login(userId: string, password: string) {
    return this._http.get<any[]>(this.jsonServerUrl).pipe(
      map((users) =>
        users.find(
          (user) => user.userId === userId && user.password === password
        )
      )
    );
  }
}
