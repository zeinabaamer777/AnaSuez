import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbalanceComponent } from './customerbalance.component';

describe('CustomerbalanceComponent', () => {
  let component: CustomerbalanceComponent;
  let fixture: ComponentFixture<CustomerbalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerbalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
