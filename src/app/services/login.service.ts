import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baserUrl from "./helper";
import {Subject} from "rxjs";
/*
Inyetamos la clase HttpClient
 */
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  //Llama al metodo del servidor de springboot y genera el token
  public generateToken(loginData:any){
    return this.httpClient.post(`${baserUrl}/generate-token`,loginData);
  }

  //Iniciamos sesión y establecemos el token en el localStorage en el navegador
  public loginUser(token:any){
    //Se alamacena el valor del token
    localStorage.setItem('token',token);
  }

  //Servira para saber si estoy conectado o no
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else {
      return true;
    }
  }

  public loginStatusSubject = new Subject<boolean>();

  //Cerramos sesion y eliminamos el token del localStorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  //Obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  //Para establecer un usuario
  //Convierte un valor de javascript a un json
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //obtenemos el usuario de localStorage si existe se devuelve el user sino se cierra sesión
  public getUser(){
    let userStr = localStorage.getItem('user');
    if (userStr != null){
      return JSON.parse(userStr);
    }else {
      this.logout();
      return null;
    }
  }

  //Obtenemos el rol de autoridad
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  //Obtenemos el usuario actual
  public getCurrentUser(){
    return this.httpClient.get(`${baserUrl}/actual-usuario`)
  }
}
