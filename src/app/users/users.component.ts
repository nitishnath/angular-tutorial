import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe({
      next: (data) => {
        this.users = data;
        console.log(data)
      },

      error: (error) => {
        console.log(error)
      }
    })
  }

}
