import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userForm: User = new User();
  constructor(private authService: UsersService,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.userForm);
  }
}
