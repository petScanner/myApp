import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTypeComponent } from './login-type.component';

describe('LoginTypeComponent', () => {
  let component: LoginTypeComponent;
  let fixture: ComponentFixture<LoginTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
