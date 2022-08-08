import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  defaultParentPath = new BehaviorSubject( 'Dashboard' );
  defaultChildPath = new BehaviorSubject( '' );
  defaultPath = new BehaviorSubject( 'Dashboard' );

  currentParentPath = this.defaultParentPath.asObservable();
  currentChildPath = this.defaultChildPath.asObservable();
  currentPath = this.defaultPath.asObservable();

  constructor() { }

  changeParentPath( path:string ) {
    this.defaultParentPath.next( path );
  }

  changeChildPath( path:string ) {
    this.defaultChildPath.next( path );
  }

  changePath( path:string ) {
    this.defaultPath.next( path );
  }
}
