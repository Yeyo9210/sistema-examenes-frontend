import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baserUrl from "./helper";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
/*
Inyectamos en el constructor hhtpClient
 */

  constructor(private httpClient:HttpClient) { }

  /*
  Creamos el metodo para mostrar las categorias
   */
  public listarCategorias(){
    return this.httpClient.get(`${baserUrl}/categoria/`);
  }
/*
Creamos el metodo post para agregar las cateogorias y su descripcion
 */
  public agregarCategoria(categoria:any){
    return this.httpClient.post(`${baserUrl}/categoria/`,categoria);
  }
}
