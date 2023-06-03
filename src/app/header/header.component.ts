import { Component } from '@angular/core';
import { CurrencyApiDataService } from '../currency-api-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navigations = [
    'Home',
    'About',
    'Contact'
  ]
  title = 'Сurrency';

  resultEur = 0;
  currJsonEur: any = [];

  resultUsd = 0;
  currJsonUsd: any = [];

  constructor (private currency: CurrencyApiDataService) { }

  ngOnInit() {
    this.convertEur();
    this.convertUsd();
  }

  convertUsd() {
    this.currency.getCurrencyDataUsd('USD').subscribe((data: any) => {
      this.currJsonUsd = JSON.stringify(data);
      this.currJsonUsd = JSON.parse(this.currJsonUsd);

      this.resultUsd = (this.currJsonUsd.rates.UAH).toFixed(2);
    })
  }

  convertEur() {
    this.currency.getCurrencyDataEur('EUR').subscribe((data: any) => {
      this.currJsonEur = JSON.stringify(data);
      this.currJsonEur = JSON.parse(this.currJsonEur);

      this.resultEur = (this.currJsonEur.rates.UAH).toFixed(2);
    })
  }
}
