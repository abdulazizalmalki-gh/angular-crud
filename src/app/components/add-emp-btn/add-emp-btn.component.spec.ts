import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpBtnComponent } from './add-emp-btn.component';

describe('AddEmpBtnComponent', () => {
  let component: AddEmpBtnComponent;
  let fixture: ComponentFixture<AddEmpBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddEmpBtnComponent]
    });
    fixture = TestBed.createComponent(AddEmpBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
