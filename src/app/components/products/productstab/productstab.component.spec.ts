import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductstabComponent } from './productstab.component';

describe('ProductstabComponent', () => {
  let component: ProductstabComponent;
  let fixture: ComponentFixture<ProductstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
