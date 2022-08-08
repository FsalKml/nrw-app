import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIiComponent } from './header-ii.component';

describe('HeaderIiComponent', () => {
  let component: HeaderIiComponent;
  let fixture: ComponentFixture<HeaderIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderIiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
