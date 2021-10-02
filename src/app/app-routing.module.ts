import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {UserListComponent} from "./user/user-list/user-list.component";
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";

const routes: Routes = [

  { path: 'user/list', component: UserListComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/detail:id', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
