import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL:string="https://routeegypt.herokuapp.com/";
  userData = new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient ,private _Router:Router) {
    if (localStorage.getItem('userToken') !=null) {
      this.saveUserData();
    }
   }

  saveUserData (){
    let encodedUserData =JSON.stringify(localStorage.getItem('userToken'));
    this.userData.next(jwtDecode(encodedUserData));
    console.log(1);
    
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/signIn'])

  }
  AuthUser(data:Users):Observable <any> {
   return this._HttpClient.post(this.baseURL+'signup' ,data)

  };
  AuthUserLogin(data:Users):Observable <any>{

    return this._HttpClient.post(this.baseURL+`signin` ,data)
  }
  

}
