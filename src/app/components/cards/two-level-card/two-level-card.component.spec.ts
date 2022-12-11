import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLevelCardComponent } from './two-level-card.component';

describe('TwoLevelCardComponent', () => {
  let component: TwoLevelCardComponent;
  let fixture: ComponentFixture<TwoLevelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoLevelCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoLevelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
