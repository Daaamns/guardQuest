import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private role: string = 'uu';
  constructor() {}

  getRole(): string {
    return this.role;
  }
}
