import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AddZoneComponent } from 'src/app/popup/add-zone/add-zone.component';
import { EditZoneComponent } from 'src/app/popup/edit-zone/edit-zone.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent {
  displayedColumns: string[] = [ 'position', 'zone', 'action' ];
  responseMessage: any;
  data: any;
  selectedPage: any;

  constructor( 
    private router: Router,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService,
    public dialog: MatDialog ) { 
      dialog.afterAllClosed
        .subscribe(() => {
          this.ngOnInit(); // Refresh Component
        }
      );
    }

  openAddDialog() {
    const dialogRef = this.dialog.open( AddZoneComponent, {
      width: '33.33%',
    });
  }

  openEditDialog( id: any ) {
    const dialogRef = this.dialog.open( EditZoneComponent, {
      width: '33.33%',
      data: id
    });
  }

  onDelete( id: any ) {
    console.log( "ID: ", id );
    this.ngxService.start();
    this.userService.deleteZone( id ).subscribe(( response: any ) => {
      this.ngxService.stop();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar( this.responseMessage, "" );
      this.router.navigate([ '/user/zone' ]);
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

  ngOnInit(): void {
    this.ngxService.start();
    this.userService.zoneLists().subscribe(( response: any ) => {
      this.ngxService.stop();
      this.data = response;

      for (let i in this.data){
        this.data[ i ][ "row" ] = Number( i )+1;
      }

      this.selectedPage = this.data.length

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

