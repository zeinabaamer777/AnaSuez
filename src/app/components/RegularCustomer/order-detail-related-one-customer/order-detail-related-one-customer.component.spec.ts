import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailRelatedOneCustomerComponent } from './order-detail-related-one-customer.component';

describe('OrderDetailRelatedOneCustomerComponent', () => {
  let component: OrderDetailRelatedOneCustomerComponent;
  let fixture: ComponentFixture<OrderDetailRelatedOneCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailRelatedOneCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailRelatedOneCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
