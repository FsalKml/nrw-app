import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentIsSideHidden: string = '';
  isHidden: boolean = false;

  constructor( private router: Router, private userService: UserService, private shared : SharedService ) { }

  ngOnInit(): void {
    if( localStorage.getItem( 'token' ) != null ) {
      this.userService.checkToken().subscribe(( response: any ) => {
        this.router.navigate([ '/user/dashboard-control' ]);
      }, ( error: any ) => {
        console.log( error );
      });
    }


    this.shared.currentIsSideHidden.subscribe( isHide => this.currentIsSideHidden = isHide );

    if( this.currentIsSideHidden == 'hidden' ) {
      this.isHidden = true;
    }

    else if( this.currentIsSideHidden == 'not hidden' ) {
      this.isHidden = false;
    }
  }

}
