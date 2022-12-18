import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipNumberComponent } from './flip-number.component';

describe('FlipNumberComponent', () => {
  let component: FlipNumberComponent;
  let fixture: ComponentFixture<FlipNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
