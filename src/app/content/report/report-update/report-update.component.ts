import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewComponent } from 'src/app/popup/review/review.component';

@Component({
  selector: 'app-report-update',
  templateUrl: './report-update.component.html',
  styleUrls: ['./report-update.component.scss']
})
export class ReportUpdateComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open( ReviewComponent, {
      width: '33.33%',
    } );

    dialogRef.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${ result }`);
    });
  }
}
