import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-signup-test',
  templateUrl: './signup-test.component.html',
  styleUrls: ['./signup-test.component.scss']
})
export class SignupTestComponent implements OnInit {
  signupForm: any = FormGroup;
  responseMessage: any;

  constructor( 
    private formBuilder: FormBuilder, 
    private router: Router,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef< SignupTestComponent >,
    private ngxService: NgxUiLoaderService ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[ null, [ Validators.required, Validators.pattern( GlobalConstants.nameRegex )]],
      email: [ null, [ Validators.required, Validators.pattern( GlobalConstants.emailRegex )]],
      password: [ null, [ Validators.required ]],
      role:[ null, [ Validators.required, Validators.pattern( GlobalConstants.roleRegex )]],
    });
  }

  handleSubmit() {
    // this.ngxService.start();
    // var formData = this.signupForm.value;
    // var data = {
    //   name: formData.name,
    //   email: formData.email,
    //   password: formData.password,
    //   role: formData.role
    // }

    // this.userService.signup( data ).subscribe(( response: any ) => {
    //   this.ngxService.stop();
    //   this.dialogRef.close();
    //   this.responseMessage = response?.message;
    //   this.snackbarService.openSnackBar( this.responseMessage, "" );
    //   this.router.navigate([ '/' ]);
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
