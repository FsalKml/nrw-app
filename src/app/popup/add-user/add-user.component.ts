import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { SharedService } from 'src/app/shared/shared.service';
import { ConfirmedValidator } from 'src/app/validators/confirm-validator';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  signupForm: any = FormGroup;
  responseMessage: any;

  constructor(
    private formBuilder: FormBuilder, 
    private shared : SharedService,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService,
    private dialogRef: MatDialogRef< AddUserComponent >
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[ null, [ Validators.required, Validators.pattern( GlobalConstants.nameRegex )]],
      email: [ null, [ Validators.required, Validators.pattern( GlobalConstants.emailRegex )]],
      password: [ null, [ Validators.required ]],
      confirmPassword: [ null, [ Validators.required ]],
      role:[ null, [ Validators.required, Validators.pattern( GlobalConstants.roleRegex )]],
    }, { 
      validator: ConfirmedValidator( 'password', 'confirmPassword' )
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.ngxService.start();
    var formData = this.signupForm.value;
    var data = {
      name: formData.name.toLowerCase(),
      email: formData.email.toLowerCase(),
      password: formData.password,
      role: formData.role.toLowerCase()
    }

    this.userService.signup( data ).subscribe(( response: any ) => {
      this.ngxService.stop();
      this.responseMessage = response?.message;
      this.shared.changeIsReload( 'reload' );
      this.dialogRef.close();
      this.snackbarService.openSnackBar( this.responseMessage, "" );
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
