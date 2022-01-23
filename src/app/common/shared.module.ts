import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faUser as farUser,
} from '@fortawesome/free-regular-svg-icons';
import { ToastrModule } from 'ngx-toastr';

//import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      //timeOut: environment.TOASTR.TIMEOUT,
      maxOpened: 1,
      preventDuplicates: true,
      autoDismiss: true
    }),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      farUser
    );
  }
}
