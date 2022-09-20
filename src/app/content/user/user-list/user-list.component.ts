import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AddUserComponent } from 'src/app/popup/add-user/add-user.component';
import { EditUserComponent } from 'src/app/popup/edit-user/edit-user.component';
import { DataService } from 'src/app/services/data.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { SharedService } from 'src/app/shared/shared.service';

interface Page {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  isReload: string = '';
  responseMessage: any;
  data: any;
  userID: any;

  constructor(
    private shared : SharedService,
    private dataService: DataService,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService,
    public dialog: MatDialog
  ) { 
    this.shared.currentIsReload.subscribe( _isReload => this.isReload = _isReload );
  }

  ngOnInit(): void {
    this.ngxService.start();
    this.userService.userList().subscribe(( response: any ) => {
      this.ngxService.stop();
      this.data = response;
      for ( let i in this.data ){
        this.data[i][ "row" ] = Number(i)+1;
      }

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

  displayedColumns: string[] = [ 'position', 'id', 'name', 'email', 'role', 'action' ];

  pages: Page[] = [
    { value: '10', viewValue: '10' },
    { value: '30', viewValue: '30' },
    { value: '60', viewValue: '60' },
  ];
  selectedPage = this.pages[ 0 ].value;

  selectPage( event: Event ) {
    this.selectedPage = ( event.target as HTMLSelectElement ).value;
  }

  onDetails() {
    this.shared.changeChildPath( 'Aduan' );
    this.shared.changePath( 'Aduan' );
  }

  onAddUser() {
    this.shared.changeChildPath( 'Tambah Profil' );
    this.shared.changePath( 'Tambah Profil' );
  }

  openAddDialog() {
    const dialogRef = this.dialog.open( AddUserComponent, {
      width: '66.66%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if( this.isReload == 'reload' ) {
        this.shared.changeIsReload( 'not reload' );
        this.ngOnInit(); // Refresh Component
      }
    });
  }

  openEditDialog( id: any ) {
    this.userID = id;
    this.dataService.setLocalStorage( 'ID', this.userID );
    
    const dialogRef = this.dialog.open( EditUserComponent, {
      width: '66.66%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if( this.isReload == 'reload' ) {
        this.shared.changeIsReload( 'not reload' );
        this.ngOnInit(); // Refresh Component
      }
    });
  }

  onDelete( id: any ) {
    // console.log( "ID: ", id );
    this.ngxService.start();
    this.userService.deleteUser( id ).subscribe(( response: any ) => {
      this.ngxService.stop();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar( this.responseMessage, "" );
      this.ngOnInit(); // Refresh Component
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
