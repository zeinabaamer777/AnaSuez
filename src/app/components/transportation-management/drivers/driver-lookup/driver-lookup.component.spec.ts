import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLookupComponent } from './driver-lookup.component';

describe('DriverLookupComponent', () => {
  let component: DriverLookupComponent;
  let fixture: ComponentFixture<DriverLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
