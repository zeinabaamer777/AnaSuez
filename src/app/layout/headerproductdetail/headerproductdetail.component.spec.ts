import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderproductdetailComponent } from './headerproductdetail.component';

describe('HeaderproductdetailComponent', () => {
  let component: HeaderproductdetailComponent;
  let fixture: ComponentFixture<HeaderproductdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderproductdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
