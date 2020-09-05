import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { UserModule } from '../dashboard/user/user.module';
import { CoreService } from './core.service';
import { LOCAL_STORAGE_CONSTANTS } from '../constants/local-storage.constant';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  loggedIn() {
    return !!localStorage.getItem(LOCAL_STORAGE_CONSTANTS.UID_TOKEN);
  }

  logout() {
    // this.coreServices.adminput('/logout', LOCAL_STORAGE_CONSTANTS.UID_TOKEN);
    this.localStorageService.removeItem(LOCAL_STORAGE_CONSTANTS.UID_TOKEN);
    this.router.navigate(['/login']);
  }

}
