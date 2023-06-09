import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtableComponent } from './inputtable.component';

describe('InputtableComponent', () => {
  let component: InputtableComponent;
  let fixture: ComponentFixture<InputtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputtableComponent]
    });
    fixture = TestBed.createComponent(InputtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
