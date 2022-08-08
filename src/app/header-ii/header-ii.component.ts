import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-header-ii',
  templateUrl: './header-ii.component.html',
  styleUrls: ['./header-ii.component.scss']
})
export class HeaderIiComponent implements OnInit {
  pathParent:string = '';
  pathChild:string = '';
  currentPath:string = '';

  constructor( private shared : SharedService ) { }

  ngOnInit(): void {
    this.shared.currentParentPath.subscribe( path => this.pathParent = path );
    this.shared.currentChildPath.subscribe( pChild => this.pathChild = pChild );
    this.shared.currentPath.subscribe( cPath => this.currentPath = cPath );
  }

}
