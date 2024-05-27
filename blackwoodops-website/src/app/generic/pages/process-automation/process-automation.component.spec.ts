import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAutomationComponent } from './process-automation.component';

describe('ProcessAutomationComponent', () => {
  let component: ProcessAutomationComponent;
  let fixture: ComponentFixture<ProcessAutomationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessAutomationComponent]
    });
    fixture = TestBed.createComponent(ProcessAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
