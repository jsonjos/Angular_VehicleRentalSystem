import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkaccountComponent } from './linkaccount.component';

describe('LinkaccountComponent', () => {
  let component: LinkaccountComponent;
  let fixture: ComponentFixture<LinkaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkaccountComponent]
    });
    fixture = TestBed.createComponent(LinkaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
