import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FawryDetailsComponent } from './fawry-details.component';

describe('FawryDetailsComponent', () => {
  let component: FawryDetailsComponent;
  let fixture: ComponentFixture<FawryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FawryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FawryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
