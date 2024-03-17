import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveVehiclesComponent } from './active-vehicles.component';

describe('ActiveVehiclesComponent', () => {
  let component: ActiveVehiclesComponent;
  let fixture: ComponentFixture<ActiveVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveVehiclesComponent]
    });
    fixture = TestBed.createComponent(ActiveVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
