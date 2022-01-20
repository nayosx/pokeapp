import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonLayoutRoutingModule } from './common-layout-routing.module';

import { CommonLayoutComponent } from './common-layout.component';


@NgModule({
  declarations: [
    CommonLayoutComponent,
  ],
  imports: [
    CommonModule,
    CommonLayoutRoutingModule
  ]
})
export class CommonLayoutModule { }
