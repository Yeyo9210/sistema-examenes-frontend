import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baserUrl from "./helper";

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private httpClient:HttpClient) { }

  public listarPreguntasDeExamen(examenId:any){
    return this.httpClient.get(`${baserUrl}/pregunta/examen/${examenId}`);
  }
}
