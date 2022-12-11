import { Component } from '@angular/core';
import { DataCollectionService } from 'src/app/services/data-collection.service';

@Component({
  selector: 'swords-payout',
  templateUrl: './swords-payout.component.html',
  styleUrls: ['./swords-payout.component.css']
})
export class SwordsPayoutComponent {

  constructor(
    private dataCollectionService: DataCollectionService
  ){
  }

  walletValue = NaN

  getInfo() {
    this.dataCollectionService.getWalletData()
    .then((response)=>{
      this.walletValue = parseInt(response.data.lamports) / 1000000000
    })

  }
}
