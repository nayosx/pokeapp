import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/interfaces/user';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss']
})
export class CardProfileComponent implements OnInit {

  public user:User = {
    name: 'Imágen perfil',
    img: '',
    age: 0,
    hobby: 'Ver Series'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
