import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {getAll, saveOnstorage} from 'src/app/common/helpers/storage.helper';
import { User } from 'src/app/common/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  private users: Array<User> = [];
  public user: User = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.users = getAll() as Array<User>;
  }

  ngOnInit(): void {

    let id = parseInt(this.route.snapshot.paramMap.get('id') || '0');
		if(id > 0) {
      this.user = this.getUser(id);
      
		} else {
			console.log('vamos a crear un nuevo elemento');
		}
  }


  private getUser(id:number): User {
    let user:User = {};
    if(this.users.length > 0) {
      user = this.users.find(u => u.id === id) || {id: 0};
    }
    return user;
  }
}
