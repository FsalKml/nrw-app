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

  // Zone
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

    // dialogRef.afterClosed().subscribe( result => {
    //   console.log(`Dialog result: ${ result }`);
    // });
  }

  openMapDialog() {
    const dialogRef = this.dialog.open( MapComponent, {
      panelClass: "map-panel",
      width: '50%',
    });

    // dialogRef.afterClosed().subscribe( result => {
    //   console.log(`Dialog result: ${ result }`);
    // });
  }

  // Form Field
  addReportForm: any = FormGroup;
  responseMessage: any;
  reportDate: any;
  defectSus: any = FormGroup;

  ngOnInit(): void {
    this.addReportForm = this.formBuilder.group({
      report_date: [ null ],
      zone: [ null ],
      location: [ null ],
      location_details:[ null ],
      defect: [ null],
      review: [ null ]
    });

    this.defectSus = this.formBuilder.group({
      service: false,
      meter: false,
      valve: false,
      pipe: false,
    });
  }

  // date() {
  //   var formData = this.addReportForm.value;
  //   // var checkData = this.defectSus.value;


  //   const checkData = []; // Store Checkmark

  //   if( this.defectSus.value.service ) {
  //     checkData.push( 'service' );
  //   }

  //   if( this.defectSus.value.meter ) {
  //     checkData.push( 'meter' );
  //   }

  //   if( this.defectSus.value.valve ) {
  //     checkData.push( 'valve' );
  //   }

  //   if( this.defectSus.value.pipe ) {
  //     checkData.push( 'pipe' );
  //   }

  //   // checkData
  //   // console.log( this.defectSus.value.service );

  //   var data = {
  //     date:formData.report_date,
  //     zone: formData.zone,
  //     location: formData.location,
  //     location_details: formData.location_details,
  //     image: JSON.stringify( this.imagePath ),
  //     defect_suspect: JSON.stringify( checkData ),
  //     review: formData.review,
  //     status: 'Pending'
  //   }
  //   console.log( data );
  //   // alert( data.toString() );
  //   // console.log( "JSON Parse: ", JSON.parse(data.image) );

  //   console.log( "JSON Parse: ", JSON.parse(data.defect) );
  // }

  // Submit Form Data
  handleSubmit() {
    // this.ngxService.start();
    // var formData = this.addReportForm.value;
    
    // // Check Mark
    // const checkData = []; // Store Check Mark

    // if( this.defectSus.value.service ) {
    //   checkData.push( 'service' );
    // }

    // if( this.defectSus.value.meter ) {
    //   checkData.push( 'meter' );
    // }

    // if( this.defectSus.value.valve ) {
    //   checkData.push( 'valve' );
    // }

    // if( this.defectSus.value.pipe ) {
    //   checkData.push( 'pipe' );
    // }
    
    // var data = {
    //   report_date: formData.report_date,
    //   zone: 1,
    //   location: formData.location,
    //   location_details: formData.location_details,
    //   latitude: "49.000000001", 
    //   longitude: "50.55000005", 
    //   images: JSON.stringify( this.imgName ),
    //   images_before: JSON.stringify( this.imgName ),
    //   images_current: JSON.stringify( this.imgName ),
    //   images_after: JSON.stringify( this.imgName ),
    //   review: formData.review,
    //   defect: JSON.stringify( checkData ),
    //   defect_services: "",
    //   defect_meters: "",
    //   defect_valves: "",
    //   defect_pipes: "",
    //   contractor_name: "",
    //   phone_no: "", 
    //   contractor_review: "",
    //   defect_type: "", 
    //   pipe_type: "", 
    //   pipe_size: 0, 
    //   start_time: formData.report_date,
    //   end_time: formData.report_date,
    //   time_taken: "", 
    //   complete_date: formData.report_date,
    //   repair_cost: 0, 
    //   water_loss: 0, 
    //   materials_use: "",
    //   work_description: "",
    //   status: 'Pending'
    // }

    // // console.log( "Data: ", data );
    // this.userService.addReport( data ).subscribe(( response: any ) => {
    //   this.ngxService.stop();
    //   this.responseMessage = response?.message;
    //   this.snackbarService.openSnackBar( this.responseMessage, "" );
    //   this.router.navigate([ '/user/report-list' ]);
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

  // Upload Images
  paths: string[] = []; // Store File 
  imgs = [];
  imgName: string[] = []; // Store Image Name
  // imagePath: string[] = []; // Store Image Path

  onSelectMultiple( event: any ) {
    // // Select Image
    // if( event.target.files.length > 0 ) {
    //   let fileType = event.target.files[0].type;

    //   // Check File Type
    //   if( fileType.match(/image\/*/) ) {

    //     // Display Selected Image
    //     for( let i=0; i < event.target.files.length; i++ ) {
    //       let reader = new FileReader();

    //       reader.readAsDataURL( event.target.files[i] );
    //       // console.log( event.target.files[i] );

    //       reader.onload = ( event: any ) => {
    //         this.paths.push( event.target.result );
    //       }
    //     }
        
    //     this.imgs = event.target.files;

    //     // Upload Image to Server
    //     this.ngxService.start();
    //     const formData = new FormData();

    //     for( let _img of this.imgs ) {
    //       formData.append( 'images', _img );
    //     }

    //     // console.log( "Image: ", formData);
    //     this.userService.uploadImage( formData ).subscribe(( response: any ) => {
    //       this.ngxService.stop();
    //       // console.log( "Array List: ", this.imgs );

    //       for( var i=0; i < response._filename.length; i++ ){
    //         this.imgName.push( `/images/${response._filename[i]}` );
    //         // this.imagePath.push( GlobalConstants.API + response._filename[i] );
    //       }
    //       // this.imgName.push( response._filename );
    //       // console.log( "Return Array", this.imgName );
    //       // console.log( "Return Array Path", this.imagePath );

    //       this.responseMessage = response?.message;
    //       this.snackbarService.openSnackBar( this.responseMessage, "" );
    //     }, ( error ) => {
    //       this.ngxService.stop();
    //       if( error.error?.message ) {
    //         this.responseMessage = error.error?.message;
    //       }

    //       else {
    //         this.responseMessage = GlobalConstants.genericError;
    //       }

    //       this.snackbarService.openSnackBar( this.responseMessage, GlobalConstants.error );
    //     });
          
    //   }

    //   else {
    //     this.snackbarService.openSnackBar( 'Please select correct image format', GlobalConstants.error );
    //   }
    // }
  }

  // Delete Image
  onDeleteImage( index: number ) {
  //   this.ngxService.start();


  //   // console.log( "Index: ", this.imgName[index]);
  //   // this.ngxService.stop();

  //   this.userService.deleteImage( this.imgName[ index ]).subscribe(( response: any ) => {
  //     this.ngxService.stop();

  //     this.imgName.splice( index, 1 );
  //     // this.imagePath.splice( index, 1 );
  //     this.paths.splice( index, 1 );
  //     // console.log( "Array New Path: ", this.imagePath );
  //     // console.log( "Array ImgName: ", this.imgName );
  //     // console.log( "Array Path: ", this.paths );
      
  //     this.responseMessage = response?.message;
  //     this.snackbarService.openSnackBar( this.responseMessage, "" );
  //   }, 
    
  //   ( error ) => {
  //     this.ngxService.stop();
  //     if( error.error?.message ) {
  //       this.responseMessage = error.error?.message;
  //     }

  //     else {
  //       this.responseMessage = GlobalConstants.genericError;
  //     }

  //     this.snackbarService.openSnackBar( this.responseMessage, GlobalConstants.error );
  //   });   
  }

}
