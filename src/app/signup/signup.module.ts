import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../utill/shared/shared.module';
import { SignupComponent } from './signup.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SignupComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
