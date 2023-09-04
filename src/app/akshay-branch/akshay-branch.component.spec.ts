import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkshayBranchComponent } from './akshay-branch.component';

describe('AkshayBranchComponent', () => {
  let component: AkshayBranchComponent;
  let fixture: ComponentFixture<AkshayBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkshayBranchComponent]
    });
    fixture = TestBed.createComponent(AkshayBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
