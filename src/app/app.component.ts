import { Component, OnInit } from '@angular/core';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit{
  users: User[] = [];
  clickCount: number;
  title = 'aa-angular-study';
  constructor(private _userService: UserService){

  }

  ngOnInit(){
    this.users = this._userService.getUsers();
    this.clickCount = this._userService.timesUsed;
  }

  onActivateUser(userId: string){
    this._userService.activateUser(userId);
    this.clickCount = this._userService.timesUsed;
  }

  onDeactivate(userId: string){
    this._userService.deactivateUser(userId);
    this.clickCount = this._userService.timesUsed;
  }

  filterUsers(isActive: boolean){
    return this.users.filter(user => user.active === isActive);
  }
}
