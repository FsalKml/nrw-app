import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

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
  selector: 'app-set-zone',
  templateUrl: './set-zone.component.html',
  styleUrls: ['./set-zone.component.scss']
})
export class SetZoneComponent implements OnInit {
  displayedColumns: string[] = [ 'position', 'zone', 'action' ];
  dataSource = ZONE;

  selectedPage = this.dataSource.length;

  constructor( public dialogRef: MatDialogRef< SetZoneComponent > ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
