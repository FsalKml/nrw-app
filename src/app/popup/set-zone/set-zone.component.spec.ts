import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetZoneComponent } from './set-zone.component';

describe('SetZoneComponent', () => {
  let component: SetZoneComponent;
  let fixture: ComponentFixture<SetZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
