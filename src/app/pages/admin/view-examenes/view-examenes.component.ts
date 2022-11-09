import { Component, OnInit } from '@angular/core';
import {ExamenService} from "../../../services/examen.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-examenes',
  templateUrl: './view-examenes.component.html',
  styleUrls: ['./view-examenes.component.css']
})
export class ViewExamenesComponent implements OnInit {
/*
Creamos el objeto examenes
En el constructor inyectamos la dependencia examenService
 */
  examenes : any = [

  ]

  constructor(private examenService:ExamenService){ }

  ngOnInit(): void {
    this.examenService.listarCuestionarios().subscribe(
      (data:any) => {
        this.examenes = data;
        console.log(this.examenes);
      },error => {
        console.log(error);
        Swal.fire('Error','Error al cargar los examenes','error');
      }
    )
  }

  eliminarExamen(examenId:any){
    Swal.fire({
      title:'Eliminar examen',
      text: 'Estas seguro de eliminar examen?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed){
        this.examenService.eliminarExamen(examenId).subscribe(
          (data:any) => {
            this.examenes = this.examenes.filter((examen:any) => examen.examenId != examenId);
            Swal.fire('Examen eliminado','El examen ha sido eliminado con exito','success');
          }, error => {
            Swal.fire('Error','Error al eliminar el examen','error');
          }
        )
      }
    })
  }

}
