import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { StepOneComponent } from 'src/app/pages/register/step-one/step-one.component';
import { StepTwoComponent } from 'src/app/pages/register/step-two/step-two.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'step-one',
    component: StepOneComponent
  },
  {
    path: 'step-two/:id',
    component: StepTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLayoutRoutingModule { }
