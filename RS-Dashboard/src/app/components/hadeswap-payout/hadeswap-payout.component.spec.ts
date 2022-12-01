import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadeswapPayoutComponent } from './hadeswap-payout.component';

describe('HadeswapPayoutComponent', () => {
  let component: HadeswapPayoutComponent;
  let fixture: ComponentFixture<HadeswapPayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HadeswapPayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HadeswapPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
