import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailLayoutComponent } from './productdetail-layout.component';

describe('ProductdetailLayoutComponent', () => {
  let component: ProductdetailLayoutComponent;
  let fixture: ComponentFixture<ProductdetailLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
