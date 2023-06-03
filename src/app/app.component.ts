import { Component } from '@angular/core';
import { CurrencyApiDataService } from './currency-api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title: string = 'Currency'
}
