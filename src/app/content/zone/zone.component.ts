import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddZoneComponent } from 'src/app/popup/add-zone/add-zone.component';

export interface ReportDetails {
  position: number;
  zone: string;
}

const ZONE: ReportDetails[] = [
  { position: 1, zone: '400mm - Bercham' },
  { position: 2, zone: '200mm - Taman Orkid' },
  { position: 3, zone: '600mm - Kampung Permai' },
  { position: 4, zone: '400mm - Taman Bahagia' },
  { position: 5, zone: '600mm - Taman Kenangan' },
  { position: 6, zone: '230mm - Pulai Indah' },
  { position: 7, zone: '760mm - Kampung Masjid' },
  { position: 8, zone: '300mm - Kampung Ampang' },
  { position: 9, zone: '120mm - Taman Mega' },
  { position: 10, zone: '640mm - Taman Mutiara' },
];

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent {
  displayedColumns: string[] = [ 'position', 'zone', 'action' ];
  dataSource = ZONE;

  selectedPage = this.dataSource.length;

  constructor( public dialog: MatDialog ) { }

  openDialog() {
    const dialogRef = this.dialog.open( AddZoneComponent, {
      width: '33.33%',
    } );

    dialogRef.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${ result }`);
    });
  }

  ngOnInit(): void {
  }

}

