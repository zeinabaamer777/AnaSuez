import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationManagementComponent } from './transportation-management.component';

describe('TransportationManagementComponent', () => {
  let component: TransportationManagementComponent;
  let fixture: ComponentFixture<TransportationManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
