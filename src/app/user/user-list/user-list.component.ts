import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: String[] = [ 'id', 'email', 'name', 'mobile', 'is_black', 'email_verified_at', 'created_at', 'updated_at','update','delete']
  users: User[] = []
  constructor(
    private userService: UserService
  ) {

  }
  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users
      })
  }

}
