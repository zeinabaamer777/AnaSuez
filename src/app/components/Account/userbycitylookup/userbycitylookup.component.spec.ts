import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbycitylookupComponent } from './userbycitylookup.component';

describe('UserbycitylookupComponent', () => {
  let component: UserbycitylookupComponent;
  let fixture: ComponentFixture<UserbycitylookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbycitylookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbycitylookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
