import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeProgressComponent } from './time-progress.component';

describe('TimeProgressComponent', () => {
  let component: TimeProgressComponent;
  let fixture: ComponentFixture<TimeProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
