import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessOperationsComponent } from './business-operations.component';

describe('BusinessOperationsComponent', () => {
  let component: BusinessOperationsComponent;
  let fixture: ComponentFixture<BusinessOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessOperationsComponent]
    });
    fixture = TestBed.createComponent(BusinessOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
