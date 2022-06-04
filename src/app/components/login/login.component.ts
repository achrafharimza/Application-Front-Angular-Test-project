import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { TokenServiceService } from 'src/app/services/token-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private tokenService: TokenServiceService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Login');
  }

  loguser: User = {};

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  get f() {
    return this.loginForm.controls;
  }

  loginUser() {
    this.userService.login(this.loginForm.value).subscribe(
      (res) => {
        this.tokenService.handle(res);
        this.tokenService.changeStatus(true);
        this.router.navigate(['/home']);
      },
      (error: Response) => {
        alert('password incorect ' + error.status);
        console.log(error);
      }
    );
  }

  // isLogged() {
  //   return JSON.parse(localStorage.getItem('user')) || null;
  // }
}
