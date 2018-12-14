import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchFiltersComponent } from './sch-filters.component';

describe('SchFiltersComponent', () => {
  let component: SchFiltersComponent;
  let fixture: ComponentFixture<SchFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
