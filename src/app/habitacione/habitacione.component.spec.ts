import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacioneComponent } from './habitacione.component';

describe('HabitacioneComponent', () => {
  let component: HabitacioneComponent;
  let fixture: ComponentFixture<HabitacioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabitacioneComponent]
    });
    fixture = TestBed.createComponent(HabitacioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
