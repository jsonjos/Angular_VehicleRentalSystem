import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnVehiclesComponent } from './return-vehicles.component';

describe('ReturnVehiclesComponent', () => {
  let component: ReturnVehiclesComponent;
  let fixture: ComponentFixture<ReturnVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnVehiclesComponent]
    });
    fixture = TestBed.createComponent(ReturnVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
