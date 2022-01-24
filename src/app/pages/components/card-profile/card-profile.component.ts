import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/common/interfaces/user';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss']
})
export class CardProfileComponent implements OnInit {

  @Input('isFormCreate')
  public isFormCreate?:boolean = true;

  @Input('image')
  public img?: string = '';

  public user: User = {
    name: 'Imágen perfil',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
