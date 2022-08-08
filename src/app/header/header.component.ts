import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pathParent:string = '';
  pathChild:string = '';
  currentPath:string = '';
  role = localStorage.getItem( 'role' );

  constructor( private shared : SharedService ) { }

  ngOnInit(): void {
    this.shared.currentParentPath.subscribe( pParent => this.pathParent = pParent );
    this.shared.currentChildPath.subscribe( pChild => this.pathChild = pChild );
    this.shared.currentPath.subscribe( cPath => this.currentPath = cPath );
  }
}
