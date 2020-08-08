import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSupportPreviewComponent } from './sales-support-preview.component';

describe('SalesSupportPreviewComponent', () => {
  let component: SalesSupportPreviewComponent;
  let fixture: ComponentFixture<SalesSupportPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesSupportPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSupportPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
