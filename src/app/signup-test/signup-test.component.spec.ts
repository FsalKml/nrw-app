import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTestComponent } from './signup-test.component';

describe('SignupTestComponent', () => {
  let component: SignupTestComponent;
  let fixture: ComponentFixture<SignupTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
