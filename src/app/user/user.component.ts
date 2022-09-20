import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor( private router: Router, private userService: UserService ) { }

  ngOnInit(): void {
    if( localStorage.getItem( 'token' ) != null ) {
      this.userService.checkToken().subscribe(( response: any ) => {
        this.router.navigate([ '/unit-kawalan/dashboard-control' ]);
      }, ( error: any ) => {
        console.log( error );
      });
    }
  }

}
