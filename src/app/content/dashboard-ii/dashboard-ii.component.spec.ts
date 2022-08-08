import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIiComponent } from './dashboard-ii.component';

describe('DashboardIiComponent', () => {
  let component: DashboardIiComponent;
  let fixture: ComponentFixture<DashboardIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardIiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
