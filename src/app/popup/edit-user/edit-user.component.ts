import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DataService } from 'src/app/services/data.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { SharedService } from 'src/app/shared/shared.service';
import { ConfirmedValidator } from 'src/app/validators/confirm-validator';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editForm: any = FormGroup;
  responseMessage: any;
  data: any;
  id: any;
  userID: any;

  constructor(
    private formBuilder: FormBuilder, 
    private shared : SharedService,
    private dataService: DataService,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService,
    private dialogRef: MatDialogRef< EditUserComponent >
  ) { 
    this.editForm = this.formBuilder.group({
      name:[ null ],
      email: [ null ],
      password: [ '' ],
      confirmPassword: [ '' ],
      role:[ null ],
    });
  }

  ngOnInit(): void {
    // this.id = this.dataService.getLocalStorage( 'ID' );

    // this.userService.userDetails( this.id ).subscribe(( response: any ) => {
    //   this.ngxService.stop();
    //   this.data = response;

    //   this.editForm = this.formBuilder.group({
    //     name:[ this.data[0].name, [ Validators.required, Validators.pattern( GlobalConstants.nameRegex )]],
    //     email: [ this.data[0].email, [ Validators.required, Validators.pattern( GlobalConstants.emailRegex )]],
    //     password: [ '' ],
    //     confirmPassword: [ '' ],
    //     role:[ this.data[0].role, [ Validators.required, Validators.pattern( GlobalConstants.roleRegex )]],
    //   }, { 
    //     validator: ConfirmedValidator( 'password', 'confirmPassword' )
    //   });

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

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    // this.ngxService.start();
    // var formData = this.editForm.value;
    // var data = {
    //   id: this.id,
    //   name: formData.name.toLowerCase(),
    //   email: formData.email.toLowerCase(),
    //   password: formData.password,
    //   role: formData.role.toLowerCase()
    // }

    // this.ngxService.stop();
    // console.log( "User Data: ", data );

    // this.userService.updateUser( data ).subscribe(( response: any ) => {
    //   this.ngxService.stop();
    //   this.responseMessage = response?.message;
    //   this.shared.changeIsReload( 'reload' );
    //   this.dialogRef.close();
    //   this.snackbarService.openSnackBar( this.responseMessage, "" );
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
}
