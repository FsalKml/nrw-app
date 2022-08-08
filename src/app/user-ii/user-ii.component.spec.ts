import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIiComponent } from './user-ii.component';

describe('UserIiComponent', () => {
  let component: UserIiComponent;
  let fixture: ComponentFixture<UserIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
