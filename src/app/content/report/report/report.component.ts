import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialDetailsComponent } from 'src/app/popup/material-details/material-details.component';

export interface material {
  no: number;
  description: string;
  length: string;
  width: string;
  depth: string;
  quantity: string;
}

const MATERIAL_DATA: material[] = [
  { no: 1, description: "Bahu Jalan (P)", length: "1.4", width: "1.2", depth: "1.3", quantity: "" },
  { no: 2, description: "Poly", length: "", width: "", depth: "", quantity: "1" },
  { no: 3, description: "FTA", length: "", width: "", depth: "", quantity: "1" },
  { no: 4, description: "BK 25", length: "", width: "", depth: "", quantity: "1" },
];

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }
  
  displayedColumns: string[] = [ 'no', 'description', 'length', 'width', 'depth', 'quantity', 'action' ];
  dataSource = MATERIAL_DATA;

  openDialog() {
    const dialogRef = this.dialog.open( MaterialDetailsComponent, {
      width: '33.33%',
    } );

    dialogRef.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${ result }`);
    });
  }
}
