import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordsPayoutComponent } from './swords-payout.component';

describe('SwordsPayoutComponent', () => {
  let component: SwordsPayoutComponent;
  let fixture: ComponentFixture<SwordsPayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwordsPayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwordsPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
