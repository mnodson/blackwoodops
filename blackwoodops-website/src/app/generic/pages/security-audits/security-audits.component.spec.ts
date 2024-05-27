import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAuditsComponent } from './security-audits.component';

describe('SecurityAuditsComponent', () => {
  let component: SecurityAuditsComponent;
  let fixture: ComponentFixture<SecurityAuditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityAuditsComponent]
    });
    fixture = TestBed.createComponent(SecurityAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
