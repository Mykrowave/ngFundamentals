import { Injectable } from '@angular/core';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;
  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'Mike',
      lastName: 'Parker'
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
