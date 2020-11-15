import { Injectable } from '@angular/core';
import { USER } from './../utils/users.dat';
import { GENERAL } from './../utils/general-util.data';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: USER[] = [];
  generalData = new GENERAL();

  constructor() {}

  fillUsers(): any {
    console.log(this.users);
    this.users =
      this.users.length <= 0 ? this.generalData.dataFillUsers() : this.users;
  }

  getUsers(): USER[] {
    return this.users;
  }

  getOneUser(id: number): USER {
    return this.users.find((e) => e.id === id);
  }

  setUsers(newUsers: USER[]): void {
    this.users = newUsers;
  }

  dataEdit(user: USER): void {
    this.users = this.users.map(
      (element) => (element = element.id === user.id ? user : element)
    );
  }

  newRegister(user: USER): void {
    this.users.push(user);
  }

  deleteRegister(id: number): void {
    this.users.splice(
      this.users.indexOf(this.users.find((e) => e.id === id)),
      1
    );
  }
}
