import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNoUsernameComponent } from './error-no-username.component';

describe('ErrorNoUsernameComponent', () => {
  let component: ErrorNoUsernameComponent;
  let fixture: ComponentFixture<ErrorNoUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorNoUsernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorNoUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
