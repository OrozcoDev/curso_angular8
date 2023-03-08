import { Component, OnInit} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users:User[]=[];
  limit!: number;

  constructor(private usersService: UsersService){
  }

  ngOnInit(){ 
   }

   fetchUsers(){
    this.usersService.getAllUsers(this.limit)
    .subscribe(users =>{
      this.users = users;
    });
   }
}
