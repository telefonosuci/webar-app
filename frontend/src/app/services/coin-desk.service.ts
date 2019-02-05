import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoinDeskService {

  coinDeskUrl: 'https://api.coindesk.com';
  apiPath: '/v1/bpi';
  currentPricePath: '/currentprice';
  cnyPath: '/CNY.json';

  constructor(private httpClient: HttpClient) { }

  public getBitcoinRate() {
    var coinDeskUrl = 'https://api.coindesk.com';
    return this.httpClient.get(coinDeskUrl + '/v1/bpi/currentprice/CNY.json');
  }
}

