import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationEmailComponent } from './registration-email.component';

describe('RegistrationEmailComponent', () => {
  let component: RegistrationEmailComponent;
  let fixture: ComponentFixture<RegistrationEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
