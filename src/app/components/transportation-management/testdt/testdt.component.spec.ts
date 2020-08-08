import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdtComponent } from './testdt.component';

describe('TestdtComponent', () => {
  let component: TestdtComponent;
  let fixture: ComponentFixture<TestdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
