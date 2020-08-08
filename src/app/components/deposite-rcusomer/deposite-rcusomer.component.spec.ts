import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositeRCusomerComponent } from './deposite-rcusomer.component';

describe('DepositeRCusomerComponent', () => {
  let component: DepositeRCusomerComponent;
  let fixture: ComponentFixture<DepositeRCusomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositeRCusomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositeRCusomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
