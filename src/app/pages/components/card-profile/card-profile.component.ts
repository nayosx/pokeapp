import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/common/interfaces/user';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardProfileComponent implements OnInit {

  @Input('isFormCreate')
  public isFormCreate?:boolean = true;

  @Input('image')
  public img?: string = '';

  @Input('user')
  public user: User = {
    name: 'Imágen perfil',
  }

  constructor() { }

  ngOnInit(): void {
    this.img = this.user.photo;
    this.user.age = dayjs().year() - (this.user.birthday?.year || 0);
  }

}
