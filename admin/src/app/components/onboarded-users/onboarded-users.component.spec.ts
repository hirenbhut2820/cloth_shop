import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardedUsersComponent } from './onboarded-users.component';

describe('OnboardedUsersComponent', () => {
  let component: OnboardedUsersComponent;
  let fixture: ComponentFixture<OnboardedUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardedUsersComponent]
    });
    fixture = TestBed.createComponent(OnboardedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
