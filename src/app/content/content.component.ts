import { Component } from '@angular/core';
import { CurrencyApiDataService } from '../currency-api-data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  currJson: any = [];

  base1: string = 'UAH'
  base2: string = 'USD'
  baseCopy: string = '';
  storage: string = '';
  result: number = 0;
  multiplier: number = 0;
  resultPlace: any;


  changeBase(firstValue: any, secondValue: any, place: any) {
    if (firstValue.value === this.base2) {
      this.storage = this.base1;
      this.base1 = firstValue.value
      this.base2 = this.storage

      firstValue.value = this.base1;
      secondValue.value = this.base2;
    } else if (secondValue.value === this.base1) {
      this.storage = this.base2;
      this.base2 = firstValue.value
      this.base1 = this.storage

      firstValue.value = this.base2;
      secondValue.value = this.base1;
    } else {
      this.base1 = firstValue.value;
    }

    this.resultPlace = place;
    this.convert();
  }

  changeMultiplier(input: any) {
    this.multiplier = input.value;
  }

  constructor (private currency: CurrencyApiDataService) { }

  ngOnChanges() {
    this.convert();
  }

  convert() {
    this.currency.getCurrencyData(this.base1).subscribe(data => {
      this.currJson = JSON.stringify(data);
      console.log(this.base1);
      console.log(this.base2);
      this.currJson = JSON.parse(this.currJson);

      if (this.base2 === 'USD') this.result = this.currJson.rates.USD;
      if (this.base2 === 'UAH') this.result = this.currJson.rates.UAH;
      if (this.base2 === 'EUR') this.result = this.currJson.rates.EUR;

      this.resultPlace.value = ((this.result * this.multiplier).toFixed(2));
    })
  }
}
