import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baserUrl from "./helper";

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
/*
Inyectamos el httpclient
 */
  constructor(private httpClient:HttpClient) { }

  public listarCuestionarios(){
    return this.httpClient.get(`${baserUrl}/examen/`);
  }

  public agregarExamen(examen:any){
    return this.httpClient.post(`${baserUrl}/examen/`,examen);
  }

  public eliminarExamen(examenId:any){
    return this.httpClient.delete(`${baserUrl}/examen/${examenId}`);
  }

  public obtenerExamen(examenId:any){
    return this.httpClient.get(`${baserUrl}/examen/${examenId}`);
  }

  public actualizarExamen(examen:any){
    return this.httpClient.put(`${baserUrl}/examen/`,examen);
  }
}
