import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoiMintComponent } from './roi-mint.component';

describe('RoiMintComponent', () => {
  let component: RoiMintComponent;
  let fixture: ComponentFixture<RoiMintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoiMintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoiMintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
