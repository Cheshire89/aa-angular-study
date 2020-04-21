import { Injectable } from '@angular/core';

export interface User{
  id: string;
  name: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 'asdfghjkl',
      name: 'Sasha',
      active: true,
    },
    {
      id: 'qwertyuio',
      name: 'Josh',
      active: false,
    },
    {
      id: 'asdfghjkq',
      name: 'Anna',
      active: false,
    },
    {
      id:'qwertyuin',
      name: 'Ryan',
      active: true,
    },
  ];

  timesUsed = 0;


  constructor() { }

  getUsers(){
    return this.users.slice(0);
  };

  activateUser(userId: string){
    const userIndex = this.getUserIndex(userId);
    if(userIndex > -1){
      this.users[userIndex].active = true;
      this.timesUsed += 1;
    }
  }

  deactivateUser(userId: string){
    const userIndex = this.getUserIndex(userId);
    if(userIndex > -1){
      this.users[userIndex].active = false;
      this.timesUsed += 1;
    }
  }

  updateTimesUsedCount(){
    this.timesUsed += 1;
    return this.timesUsed;
  }

  private getUserIndex(userId: string){
    let index = 0;
    let userIsFound = false;
    for(let user of this.users){
      if(user.id === userId){
        userIsFound = true;
        break;
      }
      index++
    }
    return userIsFound ? index : -1;
  }
}
