import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Material components
import { MaterialModule } from "./material/material.module";
import { AppComponent } from './app.component';
import { LayoutTopComponent } from './layout/layout-top/layout-top.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
