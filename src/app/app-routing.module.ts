import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  {
    path: '',
    component: CommonLayoutComponent,
    loadChildren: () => import('./layouts/common-layout/common-layout.module').then(m => m.CommonLayoutModule),
    canActivate: []
  },
  {
    path: '',
    component: HomeLayoutComponent,
    loadChildren: () => import('./layouts/home-layout/home-layout.module').then(m => m.HomeLayoutModule),
    canActivate: []
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
