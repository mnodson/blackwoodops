import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaProsComponent } from './idea-pros.component';

describe('IdeaProsComponent', () => {
  let component: IdeaProsComponent;
  let fixture: ComponentFixture<IdeaProsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaProsComponent]
    });
    fixture = TestBed.createComponent(IdeaProsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
