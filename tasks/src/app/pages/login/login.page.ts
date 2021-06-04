import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/models/auth.model';
import { Login } from 'src/app/models/login.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage{

  loginData = new Login();

  constructor(
    private router: Router,
    private apiSvc: ApiService,
    private authSvc: AuthService
  ){}

  login(){
    this.apiSvc.post('api/authentication/login', this.loginData).subscribe((response: AuthResponse) => {
      console.log(response);
      console.log(this.loginData);
       this.authSvc.saveToken(response.token);
    });
  }
}
