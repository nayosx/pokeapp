import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeLayoutModule} from './layouts/home-layout/home-layout.module';
import { CommonLayoutModule } from './layouts/common-layout/common-layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeLayoutModule,
    CommonLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
