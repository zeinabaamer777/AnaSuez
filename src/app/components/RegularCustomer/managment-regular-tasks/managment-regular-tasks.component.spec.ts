import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentRegularTasksComponent } from './managment-regular-tasks.component';

describe('ManagmentRegularTasksComponent', () => {
  let component: ManagmentRegularTasksComponent;
  let fixture: ComponentFixture<ManagmentRegularTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagmentRegularTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentRegularTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
