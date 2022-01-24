import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '0');

		if(id > 0) {
			console.log('vamos a crear un nuevo elemento');
		} else {
			console.log('hay que actualizar los datos');
		}
  }



  private redirect(): void {
		this.router.navigate(['/step-one']);
	}

}
