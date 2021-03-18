import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeApprovedDeniedComponent } from './time-approved-denied.component';

describe('TimeApprovedDeniedComponent', () => {
  let component: TimeApprovedDeniedComponent;
  let fixture: ComponentFixture<TimeApprovedDeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeApprovedDeniedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeApprovedDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
