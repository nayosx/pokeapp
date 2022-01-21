import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';

import { HomeLayoutComponent } from './home-layout.component';
import { NavbarComponent } from '../../common/components/navbar/navbar.component';
import { FooterComponent } from '../../common/components/footer/footer.component';
import { ProfileComponent } from 'src/app/common/components/profile/profile.component';
import { HomeComponent } from '../../pages/home/home.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule
  ]
})
export class HomeLayoutModule { }
