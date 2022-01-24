import { Component, Input, OnInit } from '@angular/core';
import { EStat } from 'src/app/common/enums/pokemon.enum';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  @Input('colorBar')
  public color?: string = '';

  @Input('valueStat')
  public valueStat?: number = 0;

  @Input('nameOfStat')
  public nameOfStat: string = '';

  public nameToShow: string = '';

  public maxValue: number = 100;

  constructor() { }

  ngOnInit(): void {
	  this.setValues();
    console.log(this.color);
  }

  private setValues(): void {
    switch (this.nameOfStat) {
      case EStat.attack:
        this.maxValue = 190;
        this.nameToShow = 'Ataque';
        break;
      case EStat.defense:
        this.maxValue = 230;
        this.nameToShow = 'Defensa';
        break;
      case EStat.hp:
        this.maxValue = 255;
        this.nameToShow = 'HP';
        break;
      case EStat.special_attack:
        this.maxValue = 194;
        this.nameToShow = 'Ataque Especial';
        break;
      case EStat.special_defense:
        this.maxValue = 230;
        this.nameToShow = 'Defensa Especial';
        break;
      case EStat.speed:
        this.maxValue = 180;
        this.nameToShow = 'Velocidad';
        break;
      default:
    }
  }

}
