import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSupportSapComponent } from './sales-support-sap.component';

describe('SalesSupportSapComponent', () => {
  let component: SalesSupportSapComponent;
  let fixture: ComponentFixture<SalesSupportSapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesSupportSapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSupportSapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
