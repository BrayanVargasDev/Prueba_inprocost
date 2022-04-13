import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() user: User = {
    id: 0,
    name: '',
    email: '',
    email_verified_at: '',
    created_at: '',
    updated_at: ''
  };

  constructor(
    private userService: UsersService
  ) { 
    this.user = JSON.parse(this.userService.getUser()!);
  }
  
  ngOnInit(): void {
    
  }

  


}
