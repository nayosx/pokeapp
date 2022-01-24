import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';

import { HomeLayoutComponent } from './home-layout.component';
import { NavbarComponent } from '../../common/components/navbar/navbar.component';
import { FooterComponent } from '../../common/components/footer/footer.component';
import { HomeComponent } from '../../pages/home/home.component';
import { CardProfileComponent } from '../../pages/components/card-profile/card-profile.component';
import { SharedModule } from 'src/app/common/shared.module';
import { MyPokemonsComponent } from '../../pages/home/my-pokemons/my-pokemons.component';
import { ProgressbarComponent } from '../../pages/home/my-pokemons/progressbar/progressbar.component';
import { SwiperModule } from 'swiper/angular';
import { StepOneComponent } from '../../pages/register/step-one/step-one.component';
import { StepTwoComponent } from '../../pages/register/step-two/step-two.component';
import { FormProfileComponent } from '../../pages/components/form-profile/form-profile.component';
import { PokemonsComponent } from '../../pages/components/pokemons/pokemons.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardProfileComponent,
    MyPokemonsComponent,
    ProgressbarComponent,
    StepOneComponent,
    StepTwoComponent,
    FormProfileComponent,
    PokemonsComponent,
  ],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule,
    SharedModule,
    SwiperModule,
  ]
})
export class HomeLayoutModule { }
