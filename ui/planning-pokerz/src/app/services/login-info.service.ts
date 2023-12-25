import { Injectable } from '@angular/core';
import { IUser } from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginInfoService {
  private User: IUser = {} ;

  constructor() { }

  get user(): IUser {
    return this.User;
  }
  set user(user: IUser) {
    this.User = user;
  }

}
