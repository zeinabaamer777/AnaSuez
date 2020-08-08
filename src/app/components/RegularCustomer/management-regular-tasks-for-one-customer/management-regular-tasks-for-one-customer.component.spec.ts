import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementRegularTasksForOneCustomerComponent } from './management-regular-tasks-for-one-customer.component';

describe('ManagementRegularTasksForOneCustomerComponent', () => {
  let component: ManagementRegularTasksForOneCustomerComponent;
  let fixture: ComponentFixture<ManagementRegularTasksForOneCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementRegularTasksForOneCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementRegularTasksForOneCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
