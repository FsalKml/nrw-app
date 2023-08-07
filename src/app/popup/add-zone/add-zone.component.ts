import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.scss']
})
export class AddZoneComponent implements OnInit {
  addZoneForm: any = FormGroup;
  responseMessage: any;

  constructor( 
    private formBuilder: FormBuilder, 
    private router: Router,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService,
    public dialogRef: MatDialogRef< AddZoneComponent >) { }

  ngOnInit(): void {
    this.addZoneForm = this.formBuilder.group({
      zone_code: [ null ],
      zone_name: [ null ]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    // this.ngxService.start();
    // var formData = this.addZoneForm.value;
    
    // var data = {
    //   zone_code: formData.zone_code,
    //   zone_name: formData.zone_name
    // }

    // // console.log( "Data: ", data );
    // // this.ngxService.stop();
    // this.userService.addZone( data ).subscribe(( response: any ) => {
    //   this.ngxService.stop();
    //   this.responseMessage = response?.message;
    //   this.dialogRef.close();
    //   this.snackbarService.openSnackBar( this.responseMessage, "" );
    //   this.router.navigate(['/user/zone'])
    //    .then(() => {
    //       this.router.navigate([ '/user/zone' ]);
    //     });
    //   // this.router.navigate([ '/user/zone' ]);
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

}
