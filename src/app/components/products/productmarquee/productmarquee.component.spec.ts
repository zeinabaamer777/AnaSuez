import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmarqueeComponent } from './productmarquee.component';

describe('ProductmarqueeComponent', () => {
  let component: ProductmarqueeComponent;
  let fixture: ComponentFixture<ProductmarqueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductmarqueeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
