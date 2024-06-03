import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleConditionComponent } from './multiple-condition.component';

describe('MultipleConditionComponent', () => {
  let component: MultipleConditionComponent;
  let fixture: ComponentFixture<MultipleConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleConditionComponent]
    });
    fixture = TestBed.createComponent(MultipleConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
