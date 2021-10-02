import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// @angular/common/http 패키지의 HttpClientModule을 임포트한다.
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

// Material components
import { MaterialModule } from "./material/material.module";
import { AppComponent } from './app.component';
import { LayoutTopComponent } from './layout/layout-top/layout-top.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutTopComponent,
    UserListComponent,
    UserDetailComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
