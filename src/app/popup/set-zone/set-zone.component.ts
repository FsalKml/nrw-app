import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
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
  selector: 'app-set-zone',
  templateUrl: './set-zone.component.html',
  styleUrls: ['./set-zone.component.scss']
})
export class SetZoneComponent implements OnInit {
  displayedColumns: string[] = [ 'position', 'zone', 'action' ];
  dataSource = ZONE;
  responseMessage: any;
  data: any;

  selectedPage = this.dataSource.length;

  constructor( 
    private router: Router,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService,
    public dialogRef: MatDialogRef< SetZoneComponent > ) { }

  ngOnInit(): void {
    // this.ngxService.start();
    // this.userService.zoneLists().subscribe(( response: any ) => {
    //   this.ngxService.stop();
    //   this.data = response;
    //   console.log("Data: ", this.data);

    // }, 
    
    // ( error ) => {
    //   this.ngxService.stop();
    //   if( error.error?.message ) {
    //     this.responseMessage = error.error?.message;
    //   }

    //   else {
    //     this.responseMessage = GlobalConstants.genericError;
    //   }

    //   this.snackbarService.openSnackBar( this.responseMessage, GlobalConstants.error );
    // });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
