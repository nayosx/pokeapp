import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';

import { HomeLayoutComponent } from './home-layout.component';
import { NavbarComponent } from '../../common/components/navbar/navbar.component';
import { FooterComponent } from '../../common/components/footer/footer.component';
import { HomeComponent } from '../../pages/home/home.component';
import { CardProfileComponent } from '../../pages/home/card-profile/card-profile.component';
import { SharedModule } from 'src/app/common/shared.module';
import { MyPokemonsComponent } from '../../pages/home/my-pokemons/my-pokemons.component';
import { ProgressbarComponent } from '../../pages/home/my-pokemons/progressbar/progressbar.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardProfileComponent,
    MyPokemonsComponent,
    ProgressbarComponent,
  ],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule,
    SharedModule,
    SwiperModule,
  ]
})
export class HomeLayoutModule { }
