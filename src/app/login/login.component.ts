import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { GlobalConstants } from '../shared/global-constants';
import { SignupTestComponent } from '../signup-test/signup-test.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any = FormGroup;
  responseMessage:any;

  constructor( 
    private dialog:MatDialog, 
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [ null, [ Validators.required, Validators.pattern( GlobalConstants.emailRegex )]],
      password: [ null, [ Validators.required ]],
    });
  }

  signupAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open( SignupTestComponent, dialogConfig );
  }

  handleLogin() {
    this.ngxService.start();
    var formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password
    }

    this.userService.login( data ).subscribe(( response: any ) => {
      this.ngxService.stop();
      localStorage.setItem( 'token', response.token );
      localStorage.setItem( 'userID', response.id );
      localStorage.setItem( 'email', response.email );
      localStorage.setItem( 'role', response.role );
      this.router.navigate([ '/unit-kawalan/dashboard-control' ]);
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
