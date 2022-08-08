import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-sidebar-ii',
  templateUrl: './sidebar-ii.component.html',
  styleUrls: ['./sidebar-ii.component.scss']
})
export class SidebarIiComponent implements OnInit {
  pathParent:string = '';
  
  constructor( private shared : SharedService ) { }

  ngOnInit(): void {
  }

  onDashboard() {
    this.shared.changeParentPath( 'Dashboard' );
    this.shared.changeChildPath( '' );
    this.shared.changePath( 'Dashboard' );
  }

  onReport() {
    this.shared.changeParentPath( 'Senarai Aduan' );
    this.shared.changeChildPath( '' );
    this.shared.changePath( 'Senarai Aduan' );
  }

  onProfile() {
    this.shared.changeParentPath( 'Profil Pengguna' );
    this.shared.changeChildPath( '' );
    this.shared.changePath( 'Profil Pengguna' );
  }

}
