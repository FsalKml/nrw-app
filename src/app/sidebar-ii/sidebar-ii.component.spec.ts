import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarIiComponent } from './sidebar-ii.component';

describe('SidebarIiComponent', () => {
  let component: SidebarIiComponent;
  let fixture: ComponentFixture<SidebarIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarIiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
