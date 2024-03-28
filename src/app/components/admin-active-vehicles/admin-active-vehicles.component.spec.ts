import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActiveVehiclesComponent } from './admin-active-vehicles.component';

describe('AdminActiveVehiclesComponent', () => {
  let component: AdminActiveVehiclesComponent;
  let fixture: ComponentFixture<AdminActiveVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminActiveVehiclesComponent]
    });
    fixture = TestBed.createComponent(AdminActiveVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
