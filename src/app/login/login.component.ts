import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE_CONSTANTS } from '../constants/local-storage.constant';
import { LocalStorageService } from '../services/local-storage.service';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title: string = String('Login');
  userModel: UserModel = new UserModel();
  loginForm: FormGroup;

  constructor(private userService: UserService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'password': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required])
    });
  }

  userLogin() {
    // console.log('inside userLogin');
    this.userModel = this.loginForm.getRawValue();
    this.userModel.password = btoa(this.userModel.password);
    this.userService.login(this.userModel).subscribe(
      (userModel: UserModel) => {
        console.log('userModel is ', userModel);
        this.localStorageService.set(LOCAL_STORAGE_CONSTANTS.UID_TOKEN, JSON.stringify(userModel.token));
        this.router.navigate(['/home']);
      }, (error: HttpErrorResponse) => {
        console.log('inside HttpErrorResponse is ', error);
      });
  }

  signupPage(){
    this.router.navigate(['/signup']);
  }

}
