import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-step-one',
	templateUrl: './step-one.component.html',
	styleUrls: ['./step-one.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class StepOneComponent implements OnInit {


	public imgToUpdate: string = '';

	constructor() {
	}

	ngOnInit(): void {
	}

	public updateImage(e: string) {
		this.imgToUpdate = e;
	}
}
