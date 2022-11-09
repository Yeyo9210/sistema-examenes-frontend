import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baserUrl from "./helper";

@Injectable({
  providedIn: 'root'
})
export class UserService {
/*
Inyectamos nuestra url a traves de httpclient
y creamos los metodos para las peticiones que son de nuestro controller
 */
  constructor(private httpClient:HttpClient) { }

  public añadirUsuario(user:any){
    return this.httpClient.post(`${baserUrl}/usuarios/`,user);
  }
}
