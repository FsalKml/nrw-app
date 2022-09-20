import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


import { MapComponent } from './popup/map/map.component';
import { UserComponent } from './user/user.component';
import { ZoneComponent } from './content/zone/zone.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserIiComponent } from './user-ii/user-ii.component';
import { ReviewComponent } from './popup/review/review.component';
import { ReportComponent } from './content/report/report/report.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SetZoneComponent } from './popup/set-zone/set-zone.component';
import { AddZoneComponent } from './popup/add-zone/add-zone.component';
import { ProfileComponent } from './content/profile/profile.component';
import { HeaderIiComponent } from './header-ii/header-ii.component';
import { SidebarIiComponent } from './sidebar-ii/sidebar-ii.component';
import { DashboardComponent } from './content/dashboard/dashboard-control/dashboard-control.component';
import { AddReportComponent } from './content/report/add-report/add-report.component';
import { ReportListComponent } from './content/report/report-list/report-list.component';
import { EditReportComponent } from './content/report/edit-report/edit-report.component';
import { DashboardIiComponent } from './content/dashboard-ii/dashboard-ii.component';
import { ReportUpdateComponent } from './content/report/report-update/report-update.component';
import { ReportListIiComponent } from './content/report/report-list-ii/report-list-ii.component';
import { ReportDetailsComponent } from './content/report/report-details/report-details.component';
import { MaterialDetailsComponent } from './popup/material-details/material-details.component';
import { SignupTestComponent } from './signup-test/signup-test.component';
import { UserListComponent } from './content/user/user-list/user-list.component';
import { EditZoneComponent } from './popup/edit-zone/edit-zone.component';
import { DashboardAdminComponent } from './content/dashboard/dashboard-admin/dashboard-admin.component';
import { AddUserComponent } from './popup/add-user/add-user.component';
import { EditUserComponent } from './popup/edit-user/edit-user.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: "Loading...",
  textColor: "#ffffff",
  textPosition: "center-center",
  pbColor: "cyan",
  bgsColor: "cyan",
  fgsColor: "cyan",
  fgsType: SPINNER.ballSpinClockwise,
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5
}

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    UserComponent,
    ZoneComponent,
    LoginComponent,
    ReviewComponent,
    HeaderComponent,
    UserIiComponent,
    ReportComponent,
    AddUserComponent,
    SidebarComponent,
    AddZoneComponent,
    ProfileComponent,
    SetZoneComponent,
    EditUserComponent,
    EditZoneComponent,
    UserListComponent,
    HeaderIiComponent,
    AddReportComponent,
    DashboardComponent,
    SidebarIiComponent,
    ReportListComponent,
    SignupTestComponent,
    EditReportComponent,
    DashboardIiComponent,
    ReportListIiComponent,
    ReportUpdateComponent,
    ReportDetailsComponent,
    DashboardAdminComponent,
    MaterialDetailsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot( ngxUiLoaderConfig ),
    MatButtonToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatGridListModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatStepperModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatBadgeModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
