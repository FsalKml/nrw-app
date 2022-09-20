import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-edit-zone',
  templateUrl: './edit-zone.component.html',
  styleUrls: ['./edit-zone.component.scss']
})
export class EditZoneComponent implements OnInit {
  editZoneForm: any = FormGroup;
  data: any;
  responseMessage: any;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService,
    public dialogRef: MatDialogRef< EditZoneComponent >,
    @Inject(MAT_DIALOG_DATA) public zoneId: any
  ) { 
    this.editZoneForm = this.formBuilder.group({
      zone_code: [ null ],
      zone_name: [ null ]
    });
  }

  ngOnInit(): void {
    
    let id = this.zoneId
    this.userService.zoneDetails( id ).subscribe(( response: any ) => {
      this.ngxService.stop();
      this.data = response;
      this.editZoneForm = this.formBuilder.group({
        zone_code: [ this.data[0].zone_code ],
        zone_name: [ this.data[0].zone_name ]
      });

      console.log( "Id: ", id );
      console.log( "Data: ", this.data );
      console.log( "Code: ", this.data[0].zone_code );
      console.log( "Name: ", this.data[0].zone_name );

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

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.ngxService.start();
    var formData = this.editZoneForm.value;
    
    var data = {
      id: this.zoneId,
      zone_code: formData.zone_code,
      zone_name: formData.zone_name
    }

    console.log( "Data: ", data );
    this.userService.updateZone( data ).subscribe(( response: any ) => {
      this.ngxService.stop();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar( this.responseMessage, "" );
      this.dialogRef.close();
      this.router.navigate([ '/unit-kawalan/zone' ]);
    }, 
    
    ( error ) => {
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
