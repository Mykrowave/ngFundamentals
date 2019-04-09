import { Injectable } from '@angular/core';
import { IUser } from './iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;
  constructor(private http: HttpClient) { }

  loginUser(userName: string, passWord: string) {

    const loginObject = { username: userName, password: passWord};
    const postOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post('/api/Login', loginObject, postOptions)
      .pipe(tap(data => {
        this.currentUser = data['user'] as IUser;
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
  updateProfile(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
