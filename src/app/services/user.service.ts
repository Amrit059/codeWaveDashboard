import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private coreServices: CoreService) { }

  login(userModel: UserModel): Observable<UserModel> {
    return this.coreServices.post('login/user', userModel);
  }

  signup(userModel: UserModel): Observable<UserModel> {
    return this.coreServices.post('create/user', userModel);
  }

  getUserList(
    page: Number,
    limit: Number,
    search_term?: string,
    sortedBy?: string,
    orderBy?: Number
  ): Observable<UserModel[]> {
    return this.coreServices.get('fetch/user/list', {
      page: page,
      limit: limit,
      search_term: search_term,
      sortedBy: sortedBy,
      orderBy: orderBy,
    });
  }

  createUser(userModel: UserModel): Observable<UserModel> {
    return this.coreServices.post('create/user', userModel);
  }

  updateUser(userModel: UserModel): Observable<UserModel> {
    return this.coreServices.put('update/user', userModel, {});
  }

}
