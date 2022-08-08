import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

interface Page {
  value: string;
  viewValue: string;
}

export interface ReportDetails {
  position: number;
  no_series: number;
  date: string;
  zone: string;
  status: string;
}

const ELEMENT_DATA: ReportDetails[] = [
  { position: 1, no_series: 186, date: '4/3/2022', zone: '400mm - Bercham', status: 'Pending' },
  { position: 2, no_series: 197, date: '15/3/2022', zone: '200mm - Taman Orkid', status: 'Completed' },
  { position: 3, no_series: 199, date: '20/3/2022', zone: '600mm - Kampung Permai', status: 'Completed' },
  { position: 4, no_series: 201, date: '29/3/2022', zone: '400mm - Taman Bahagia', status: 'Cancelled' },
  { position: 5, no_series: 202, date: '1/4/2022', zone: '600mm - Taman Kenangan', status: 'Completed' },
  { position: 6, no_series: 203, date: '6/4/2022', zone: '230mm - Pulai Indah', status: 'Cancelled' },
  { position: 7, no_series: 204, date: '7/4/2022', zone: '760mm - Kampung Masjid', status: 'Completed' },
  { position: 8, no_series: 205, date: '12/5/2022', zone: '300mm - Kampung Ampang', status: 'Cancelled' },
  { position: 9, no_series: 210, date: '18/5/2022', zone: '120mm - Taman Mega', status: 'Pending' },
  { position: 10, no_series: 211, date: '23/5/2022', zone: '640mm - Taman Mutiara', status: 'Cancelled' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pathChild:string = '';

  constructor( private shared : SharedService ) { }

  ngOnInit(): void {
    this.shared.currentParentPath.subscribe( pChild => this.pathChild = pChild );
  }

  displayedColumns: string[] = [ 'position', 'no_series', 'date', 'zone', 'status', 'action' ];
  dataSource = ELEMENT_DATA;
  detail = false;

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
}
