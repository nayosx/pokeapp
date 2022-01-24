import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as dayjs from 'dayjs';
import { User } from 'src/app/common/interfaces/user';

import {getAll, saveOnstorage} from 'src/app/common/helpers/storage.helper';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormProfileComponent implements OnInit {

	@Input('isFormCreate')
  	public isFormCreate?:boolean = true;
	
	@Input('user') 
	public user?: User = {};

	@Output() imageEvent = new EventEmitter<string>();


	private users: Array<User> = [];
	private nextId: number = 0;
	private nextNickName: string = 'user_';
	private photoBase64: string = '';

	public labelForFile: string = 'Seleccione foto';
	public labelForDocument: string = 'Documento *';
  	public form: FormGroup;

	public items: Array<any> = [
		{
			id: 1,
			label: 'Jugar Fútbol'
		},
		{
			id: 2,
			label: 'Jugar Basquetball'
		},
		{
			id: 3,
			label: 'Jugar Tennis'
		},
		{
			id: 4,
			label: 'Jugar Voleibol'
		},
		{
			id: 5,
			label: 'Jugar Fifa'
		},
		{
			id: 6,
			label: 'Jugar Videojuegos'
		},
	];

  	constructor(
		  private formBuilder: FormBuilder,
		  private router: Router,
	) { 
		this.form = this.formBuilder.group({
			name: [null, [Validators.required]],
			hobby: [null],
			birthday: [null, [Validators.required]],
			document: [null, [Validators.required]],
			photo: [null, [Validators.required]],
			isChild: [true]
		});

		this.users = getAll() as Array<User>;

		this.nextId = this.users.length + 1;
		this.nextNickName += `${this.nextId}`;
	}

	ngOnInit(): void {}

	public onSubmit(): void {
		let user: User =  this.form.getRawValue() as User;
		if(this.isFormCreate) {
			user.id = this.nextId;
			user.nickname = this.nextNickName;
			user.photo = this.photoBase64;
			user.pokemons = [];
			this.users.push(user);
			saveOnstorage(this.users);
		} else {

		}
		this.redirect();
	}
	
	public onDateSelect(e: NgbDate): void {
		let years = dayjs().year() - e.year;
		let isChild = (years < 18 ) ? true : false;
		this.labelForDocument = (isChild) ? 'Carnet de Minoridad' : 'DUI';
		this.form.controls['isChild'].setValue(isChild);
	}

	public fileChange(e: Event): void {
		const input = e.target as HTMLInputElement;
		if (!input.files?.length) {
			return;
		}
		const file = input.files;
		this.labelForFile = file[0].name;
		this.getBase64(file[0]);
	}

	private getBase64(file: Blob) {
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload =  () => {
			this.photoBase64 = reader.result?.toString() || '';
			this.imageEvent.emit(this.photoBase64);
		};
		reader.onerror = (error) => {
			console.log('Error: ', error);
		};
	}

	private redirect(): void {
		if(this.isFormCreate) {
			this.router.navigate(['/step-two', this.nextId]);
		} else {
			this.router.navigate(['/home']);
		}
	}
}
