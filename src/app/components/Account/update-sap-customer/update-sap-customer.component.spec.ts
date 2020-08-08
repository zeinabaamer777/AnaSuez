import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSapCustomerComponent } from './update-sap-customer.component';

describe('UpdateSapCustomerComponent', () => {
  let component: UpdateSapCustomerComponent;
  let fixture: ComponentFixture<UpdateSapCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSapCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSapCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
