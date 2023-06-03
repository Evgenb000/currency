import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiDataService {

  constructor(private http:HttpClient) { }

  getCurrencyData(countryFirst: string) {
    let url = 'https://api.exchangerate.host/latest?base=' + countryFirst;

    return this.http.get(url);
  }

  headerUrlUsd = 'https://api.exchangerate.host/latest?base=USD';
  headerUrlEur = 'https://api.exchangerate.host/latest?base=EUR';

  getCurrencyDataUsd(countryFirst: string) {
    return this.http.get(this.headerUrlUsd);
  }

  getCurrencyDataEur(countryFirst: string) {
    return this.http.get(this.headerUrlEur);
  }
}
