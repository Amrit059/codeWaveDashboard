import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharedModule } from '../../utill/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }, {
    path: 'list',
    component: UserListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserListComponent],
  providers: [
    UserService
  ]
})
export class UserModule { }
