import { Component, OnInit } from '@angular/core';

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
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent implements OnInit {
  displayedColumns: string[] = [ 'no', 'description', 'length', 'width', 'depth', 'quantity' ];
  dataSource = MATERIAL_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
