import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userModel: UserModel[] = [];

  searchForm: FormGroup

  search = '';
  page: Number = 1;
  limit: Number = 30;

  sortedby = [
    { display: 'Created Date', value: 'createdAt' },
  ];

  orderedBy = [
    { display: 'Ascending ', value: 1 },
    { display: 'Descending ', value: -1 }
  ];

  selectedOrder = this.orderedBy[0].value;

  constructor(
    private _userServices: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUserList(this.page, this.limit);
    this.searchForm = new FormGroup({
      'search_term': new FormControl(null),
      'sortedBy': new FormControl(null),
      'orderBy': new FormControl(1)
    });
  }

  getUserList(
    page: Number,
    limit: Number,
    search_term?: string,
    sortedBy?: string,
    orderBy?: Number
  ) {
    // console.log('inside getUserList');
    this._userServices.getUserList(page, limit, search_term, sortedBy, orderBy).subscribe(
      (usermodel: UserModel[]) => {
        this.userModel = usermodel;
      }, (error: HttpErrorResponse) => {
        this.authService.logout()
        console.log('inside HttpErrorResponse is ', error);
      });
  }

  backButton(){
    this.getUserList(this.page, this.limit);
    this.search = ''
  }

  searchFunction(event) {
    this.searchForm.controls['search_term'].setValue(event);
    this.getUserList(this.page, this.limit,
      this.searchForm.get('search_term').value,
      this.searchForm.get('sortedBy').value,
      this.searchForm.get('orderBy').value);
  }

  sortedBy(event: MatSelectChange) {
    this.searchForm.controls['sortedBy'].setValue(event.value);
    this.getUserList(this.page, this.limit,
      this.searchForm.get('search_term').value,
      this.searchForm.get('sortedBy').value,
      this.searchForm.get('orderBy').value);
  }

  orderBy(event: MatSelectChange) {
    this.searchForm.controls['orderBy'].setValue(event.value);
    this.getUserList(this.page, this.limit,
      this.searchForm.get('search_term').value,
      this.searchForm.get('sortedBy').value,
      this.searchForm.get('orderBy').value);
  }
}
