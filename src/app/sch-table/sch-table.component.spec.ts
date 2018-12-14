import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchTableComponent } from './sch-table.component';

describe('SchTableComponent', () => {
  let component: SchTableComponent;
  let fixture: ComponentFixture<SchTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
