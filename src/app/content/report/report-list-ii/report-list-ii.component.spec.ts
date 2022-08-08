import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListIiComponent } from './report-list-ii.component';

describe('ReportListIiComponent', () => {
  let component: ReportListIiComponent;
  let fixture: ComponentFixture<ReportListIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportListIiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportListIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
