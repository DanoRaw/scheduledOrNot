import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsToCoverComponent } from './shifts-to-cover.component';

describe('ShiftsToCoverComponent', () => {
  let component: ShiftsToCoverComponent;
  let fixture: ComponentFixture<ShiftsToCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftsToCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftsToCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
