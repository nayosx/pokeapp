import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/interfaces/user';
import {getAll} from 'src/app/common/helpers/storage.helper';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {


  public user: User = {};
  private users: Array<User> = [];

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

  private redirect(): void {
		this.router.navigate(['/step-one']);
	}

  private getUser(id:number): User {
    let user:User = {};
    if(this.users.length > 0) {
      user = this.users.find(u => u.id === id) || {id: 0};
    }
    return user;
  }

}
