import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
