import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl;

  constructor( private httpClient: HttpClient ) { }

  // USER
  // Signup
  signup( data: any ) {
    return this.httpClient.post( this.url + "/user/signup/", data, {
      headers: new HttpHeaders().set( 'Content-Type', "application/json" )
    });
  }

  // Login
  login( data: any ) {
    return this.httpClient.post( this.url + "/user/login", data, {
      headers: new HttpHeaders().set( 'Content-Type', "application/json" )
    });
  }

  // Forgot Password
  forgotPassword( data: any ) {
    return this.httpClient.post( this.url + "/user/forgotPassword/", data, {
      headers: new HttpHeaders().set( 'Content-Type', "application/json" )
    });
  }

  // Check Token
  checkToken() {
    return this.httpClient.get( this.url + "/user/checkToken" );
  }

  // Report
  // Add Report
  addReport( data: any ) {
    return this.httpClient.post( this.url + "/report/addReport/", data, {
      headers: new HttpHeaders().set( 'Content-Type', "application/json" )
    });
  }

  // Report List
  reportList() {
    return this.httpClient.get( this.url + "/report/getReport/" );
  }

  // Report List
  reportDetails( data: any ) {
    return this.httpClient.get( this.url + `/report/getReportById/${ data }` );
  }

  // Image
  // Upload Image
  uploadImage( data: any ) {
    return this.httpClient.post( this.url + "/report/uploadImage/", data );
  }

  // Delete
  deleteImage( data: any ) {
    return this.httpClient.delete( this.url + `/report/deleteImage/${ data }`);
  }


  // User
  // User List
  userList() {
    return this.httpClient.get( this.url + "/user/getUser/" );
  }

  // User Details
  userDetails( data: any ) {
    return this.httpClient.get( this.url + `/user/getUserById/${ data }` );
  }

  // Update User
  updateUser( data: any ) {
    return this.httpClient.post( this.url + "/user/updateUser/", data, {
      headers: new HttpHeaders().set( 'Content-Type', "application/json" )
    });
  }

  // Delete User
  deleteUser( data: any ) {
    return this.httpClient.delete( this.url + `/user/deleteUser/${ data }` );
  }


  // Zone
  // Add Zone
  addZone( data: any ) {
    return this.httpClient.post( this.url + "/zone/addZone/", data, {
      headers: new HttpHeaders().set( 'Content-Type', "application/json" )
    });
  }

  // Zone Lists
  zoneLists() {
    return this.httpClient.get( this.url + "/zone/getZones/" );
  }

  // Zone Details
  zoneDetails( data: any ) {
    return this.httpClient.get( this.url + `/zone/getZoneById/${ data }` );
  }

  // Update Zone
  updateZone( data: any ) {
    return this.httpClient.patch( this.url + "/zone/updateZone/", data, {
      headers: new HttpHeaders().set( 'Content-Type', "application/json" )
    });
  }

  // Delete Zone
  deleteZone( data: any ) {
    return this.httpClient.delete( this.url + `/zone/deleteZone/${ data }` );
  }
}
