import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MapComponent } from 'src/app/popup/map/map.component';
import { SetZoneComponent } from 'src/app/popup/set-zone/set-zone.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

export interface ReportDetails {
  position: number;
  zone: string;
}

const ZONE: ReportDetails[] = [
  { position: 1, zone: '400mm - Bercham' },
  { position: 2, zone: '200mm - Taman Orkid' },
  { position: 3, zone: '600mm - Kampung Permai' },
  { position: 4, zone: '400mm - Taman Bahagia' },
  { position: 5, zone: '600mm - Taman Kenangan' },
  { position: 6, zone: '230mm - Pulai Indah' },
  { position: 7, zone: '760mm - Kampung Masjid' },
  { position: 8, zone: '300mm - Kampung Ampang' },
  { position: 9, zone: '120mm - Taman Mega' },
  { position: 10, zone: '640mm - Taman Mutiara' },
];

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddReportComponent implements OnInit {

  displayedColumns: string[] = [ 'position', 'zone', 'action' ];
  dataSource = ZONE;

  selectedPage = this.dataSource.length;

  constructor( 
    public dialog: MatDialog, 
    private formBuilder: FormBuilder, 
    private router: Router,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService ) { }

  openZoneDialog() {
    const dialogRef = this.dialog.open( SetZoneComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${ result }`);
    });
  }

  openMapDialog() {
    const dialogRef = this.dialog.open( MapComponent, {
      panelClass: "map-panel",
      width: '50%',
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${ result }`);
    });
  }

  addReportForm: any = FormGroup;
  responseMessage: any;

  ngOnInit(): void {
    this.addReportForm = this.formBuilder.group({
      date:[ null ],
      zone: [ null ],
      location: [ null ],
      location_details:[ null ],
      defect: [ null ],
      review: [ null ]
    });
  }

  handleSubmit() {
    this.ngxService.start();
    var formData = this.addReportForm.value;
    var data = {
      date:formData.date,
      zone: formData.zone,
      location: formData.location,
      location_details: formData.location_details,
      defect: formData.defect,
      review: formData.review
    }

    this.userService.addReport( data ).subscribe(( response: any ) => {
      this.ngxService.stop();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar( this.responseMessage, "" );
      this.router.navigate([ '/unit-kawalan/dashboard/report-details' ]);
    }, ( error ) => {
      this.ngxService.stop();
      if( error.error?.message ) {
        this.responseMessage = error.error?.message;
      }

      else {
        this.responseMessage = GlobalConstants.genericError;
      }

      this.snackbarService.openSnackBar( this.responseMessage, GlobalConstants.error );
    });
  }

}
