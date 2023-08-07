
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ZoneComponent } from './content/zone/zone.component';
import { LoginComponent } from './login/login.component';
import { UserIiComponent } from './user-ii/user-ii.component';
import { ReportComponent } from './content/report/report/report.component';
import { ProfileComponent } from './content/profile/profile.component';
import { UserListComponent } from './content/user/user-list/user-list.component';
import { DashboardComponent } from './content/dashboard/dashboard-control/dashboard-control.component';
import { AddReportComponent } from './content/report/add-report/add-report.component';
import { ReportListComponent } from './content/report/report-list/report-list.component';
import { EditReportComponent } from './content/report/edit-report/edit-report.component';
import { DashboardIiComponent } from './content/dashboard-ii/dashboard-ii.component';
import { ReportUpdateComponent } from './content/report/report-update/report-update.component';
import { ReportListIiComponent } from './content/report/report-list-ii/report-list-ii.component';
import { ReportDetailsComponent } from './content/report/report-details/report-details.component';
import { DashboardAdminComponent } from './content/dashboard/dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user', component: UserComponent,
      children: [
        { path: '', component: DashboardComponent },
        { path: 'dashboard-admin', component: DashboardAdminComponent },
        { path: 'dashboard-control', component: DashboardComponent },
        { path: 'dashboard-control/report-details', component: ReportDetailsComponent },
        { path: 'report-list', component: ReportListComponent },
        { path: 'report-list/report-add', component: AddReportComponent },
        { path: 'report-list/report-details', component: ReportDetailsComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'user-list', component: UserListComponent },
        { path: 'zone', component: ZoneComponent },
      ]
  },
  { path: 'unit-kontrak', component: UserIiComponent,
    children:[
      { path: '', component: DashboardIiComponent },
      { path: 'dashboard', component: DashboardIiComponent },
      { path: 'dashboard/report-details', component: ReportDetailsComponent },
      { path: 'report-list', component: ReportListIiComponent },
      { path: 'report-list/edit', component: EditReportComponent,
          children: [
            { path: '', component: ReportComponent },
            { path: 'report', component: ReportComponent },
            { path: 'update', component: ReportUpdateComponent },
          ]},
      { path: 'profile', component: ProfileComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot( routes, { scrollPositionRestoration: 'enabled' })],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
