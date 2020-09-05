import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { APP_CONSTANT } from '../constants/app.constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public title: string = String('Signup');
  userModel: UserModel = new UserModel();
  signupForm: FormGroup;
  genders = APP_CONSTANT.USER_GENDER;
  public maxDOB = moment().subtract(18, 'years').toDate();
  validatorObject = { 'minLength': 8, 'maxLength': 16 }

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'password': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required]),
      'name': new FormControl(null),
      'phoneNo': new FormControl(null, [Validators.required, Validators.minLength(this.validatorObject['minLength']), Validators.maxLength(this.validatorObject['maxLength'])]),
      'gender': new FormControl(null),
      'dob': new FormControl(null),
      'about': new FormControl(null),
    });
  }

  userSignup() {
    // console.log('inside userSignup');
    this.userModel = this.signupForm.getRawValue();
    console.log('userModel is ', this.userModel);
    this.userService.createUser(this.userModel).subscribe(
      (userModel: UserModel) => {
        console.log('userModel is ', userModel);
        this.router.navigate(['/login']);
      }, (error: HttpErrorResponse) => {
        console.log('inside HttpErrorResponse is ', error);
      });
  }

}
