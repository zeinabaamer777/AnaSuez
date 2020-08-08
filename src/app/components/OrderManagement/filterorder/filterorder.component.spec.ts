import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterorderComponent } from './filterorder.component';

describe('FilterorderComponent', () => {
  let component: FilterorderComponent;
  let fixture: ComponentFixture<FilterorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
