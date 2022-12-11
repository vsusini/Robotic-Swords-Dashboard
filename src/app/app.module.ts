import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwordsPayoutComponent } from './components/swords-payout/swords-payout.component';
import { HadeswapPayoutComponent } from './components/hadeswap-payout/hadeswap-payout.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { TwoLevelCardComponent } from './components/cards/two-level-card/two-level-card.component';
import { RoiMintComponent } from './components/roi-mint/roi-mint.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    SwordsPayoutComponent,
    HadeswapPayoutComponent,
    TwoLevelCardComponent,
    RoiMintComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
