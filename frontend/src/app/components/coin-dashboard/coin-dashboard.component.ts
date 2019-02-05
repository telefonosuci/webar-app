import { Component, OnInit } from '@angular/core';
import { CoinDeskService } from '../../services/coin-desk.service';

@Component({
  selector: 'app-coin-dashboard',
  templateUrl: './coin-dashboard.component.html',
  styleUrls: ['./coin-dashboard.component.css']
})
export class CoinDashboardComponent implements OnInit {

  bitcoinRate: any;

  constructor(
    public coindeskService: CoinDeskService
    ) {

    }

  ngOnInit() {

    this.loadCoinData();

  }

  loadCoinData(){
    this.coindeskService.getBitcoinRate().subscribe(data => {
      console.log(data);
      this.bitcoinRate = data;

    });
  }
}
