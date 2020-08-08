import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverOrderWayComponent } from './deliver-order-way.component';

describe('DeliverOrderWayComponent', () => {
  let component: DeliverOrderWayComponent;
  let fixture: ComponentFixture<DeliverOrderWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverOrderWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverOrderWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
