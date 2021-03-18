import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAShiftComponent } from './post-a-shift.component';

describe('PostAShiftComponent', () => {
  let component: PostAShiftComponent;
  let fixture: ComponentFixture<PostAShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAShiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
