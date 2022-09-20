import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
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

  onUser() {
    this.shared.changeParentPath( 'Senarai Profil' );
    this.shared.changeChildPath( '' );
    this.shared.changePath( 'Senarai Profil' );
  }

  onProfile() {
    this.shared.changeParentPath( 'Profil Pengguna' );
    this.shared.changeChildPath( '' );
    this.shared.changePath( 'Profil Pengguna' );
  }

  onZone() {
    this.shared.changeParentPath( 'Zone Bekalan' );
    this.shared.changeChildPath( '' );
    this.shared.changePath( 'Zone Bekalan' );
  }

}
