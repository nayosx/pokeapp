import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonLayoutRoutingModule } from './common-layout-routing.module';

import { CommonLayoutComponent } from './common-layout.component';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { Error404Component } from '../../pages/error404/error404.component';


@NgModule({
  declarations: [
    CommonLayoutComponent,
    LoginComponent,
    RegisterComponent,
    Error404Component,
  ],
  imports: [
    CommonModule,
    CommonLayoutRoutingModule
  ]
})
export class CommonLayoutModule { }
