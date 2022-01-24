import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faUser as farUser,
  faCalendarAlt as farCalendarAlt
} from '@fortawesome/free-regular-svg-icons';

import {
  faUpload
} from '@fortawesome/free-solid-svg-icons'


import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    NgSelectModule,
    NgbModule,
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
    NgSelectModule,
    NgbModule,
  ]
})
export class SharedModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      farUser,
      farCalendarAlt,
      faUpload
    );
  }
}
