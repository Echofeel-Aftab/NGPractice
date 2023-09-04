import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftabBranchComponent } from './aftab-branch.component';

describe('AftabBranchComponent', () => {
  let component: AftabBranchComponent;
  let fixture: ComponentFixture<AftabBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AftabBranchComponent]
    });
    fixture = TestBed.createComponent(AftabBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
