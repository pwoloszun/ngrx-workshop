import { Injectable } from '@angular/core';

export interface ICurrentUser {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUser: ICurrentUser | null = {
    id: 100,
    name: 'Bob',
    email: 'bob.smith@smth.com',
  };

  constructor() { }

  getCurrentUser(): ICurrentUser | null {
    return this.currentUser;
  }

  isLogged(): boolean {
    return this.currentUser !== null;
  }

  emailLogin(email: string, passwd: string) {
    // TODO
  }

  logout() {
    // TODO
  }
}
