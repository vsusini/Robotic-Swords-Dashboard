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

  getInfo() {
    this.dataCollectionService.getWalletData()
  }
}
