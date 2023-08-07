import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
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
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  displayedColumns: string[] = [ 'position', 'no_series', 'date', 'zone', 'status', 'action' ];
  responseMessage: any;
  data: any;
  userID : any;

  constructor( 
    private shared : SharedService,
    private dataService: DataService,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService ) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.userService.reportList().subscribe(( response: any ) => {
      this.ngxService.stop();
      this.data = response;

      for (let i in this.data){
        var _date = new Date( this.data[i].report_date );
        
        this.data[i]["row"] = Number(i)+1;
        this.data[i]["r_date"] = _date.toLocaleDateString();
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


  pages: Page[] = [
    { value: '10', viewValue: '10' },
    { value: '30', viewValue: '30' },
    { value: '60', viewValue: '60' },
  ];
  selectedPage = this.pages[ 0 ].value;

  selectPage( event: Event ) {
    this.selectedPage = ( event.target as HTMLSelectElement ).value;
  }

  onDetails( data: any ) {
    this.userID = data;

    this.shared.changeChildPath( 'Aduan' );
    this.shared.changePath( 'Aduan' );

    this.dataService.setLocalStorage( 'ID', this.userID );
  }

  onAddReport() {
    this.shared.changeChildPath( 'Tambah Aduan' );
    this.shared.changePath( 'Tambah Aduan' );
  }
  
}
