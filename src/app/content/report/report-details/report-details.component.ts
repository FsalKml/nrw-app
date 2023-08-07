import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DataService } from 'src/app/services/data.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { environment } from 'src/environments/environment';

export interface material {
  no: number;
  description: string;
  length: string;
  width: string;
  depth: string;
  quantity: string;
}

const MATERIAL_DATA: material[] = [
  { no: 1, description: "Bahu Jalan (P)", length: "1.4", width: "1.2", depth: "1.3", quantity: "" },
  { no: 2, description: "Poly", length: "", width: "", depth: "", quantity: "1" },
  { no: 3, description: "FTA", length: "", width: "", depth: "", quantity: "1" },
  { no: 4, description: "BK 25", length: "", width: "", depth: "", quantity: "1" },
];

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent implements OnInit {
  url = environment.apiUrl;
  displayedColumns: string[] = [ 'no', 'description', 'length', 'width', 'depth', 'quantity' ];
  dataSource = MATERIAL_DATA;
  responseMessage: any;
  data: any;
  reportDate: any;
  completeDate: any;
  startTime: any;
  endTime: any;
  checkBox = []; // Store Check
  imageName = []; // Store Image Path
  imagePaths: string[] = []; // Store Image Path
  checkService = false;
  checkMeter = false;
  checkValve = false;
  checkPipe = false;

  constructor( 
    private dataService: DataService,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService
   ) { }

  ngOnInit(): void {
    // this.ngxService.start();
    // let id = this.dataService.getLocalStorage( 'ID' );

    // this.userService.reportDetails( id ).subscribe(( response: any ) => {
    //   this.ngxService.stop();
    //   this.data = response;
    //   // console.log( "Data: ", this.data );
      
    //   // Convert String
    //   this.imageName = JSON.parse( this.data[0].images );
    //   this.checkBox = JSON.parse( this.data[0].defect );

    //   for( let i in this.imageName ) {
    //     this.imagePaths[i] = this.url + this.imageName[i];
    //   }
    //   console.log( "Image: ", this.imagePaths );
    //   // console.log( "Check Box: ", this.checkBox );

    //   for( let i in this.checkBox ) {
    //     console.log( "Check: ", this.checkBox[i] );

    //     if( this.checkBox[i] == 'service') {
    //       this.checkService = true;
    //     }

    //     if( this.checkBox[i] == 'meter') {
    //       this.checkMeter = true;
    //     }

    //     if( this.checkBox[i] == 'valve') {
    //       this.checkValve = true;
    //     }

    //     if( this.checkBox[i] == 'pipe') {
    //       this.checkPipe = true;
    //     }
    //   }

    //   console.log( "Date: ", this.data[0].report_date );
    //   var _date = new Date( this.data[0].report_date );
    //   var _completeDate = new Date( this.data[0].complete_date );
    //   var _startTime = new Date( this.data[0].start_time );
    //   var _endTime = new Date( this.data[0].end_time );

    //   this.reportDate = _date.toLocaleDateString();
    //   this.completeDate = _completeDate.toLocaleDateString();
    //   this.startTime = _startTime.toLocaleTimeString();
    //   this.endTime = _endTime.toLocaleTimeString();

    // }, ( error ) => {
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

  // Prevent Checkbox Click
  notClick( event: any ) {
    event.preventDefault();
  }

}
