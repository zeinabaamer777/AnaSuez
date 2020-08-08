import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdestinationpricesComponent } from './orderdestinationprices.component';

describe('OrderdestinationpricesComponent', () => {
  let component: OrderdestinationpricesComponent;
  let fixture: ComponentFixture<OrderdestinationpricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdestinationpricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdestinationpricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
