import { Component, OnInit } from '@angular/core';
import {CategoriaService} from "../../../services/categoria.service";
import Swal from "sweetalert2";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ExamenService} from "../../../services/examen.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit {

  categorias:any = [

  ]

  examenData = {
    titulo:'',
    descripcion:'',
    puntosMaximos:'',
    numeroDePreguntas:'',
    activo:true,
    categoria:{
      categoriaId:''
    }
  }

  constructor(private categoriaService:CategoriaService,
              private snack:MatSnackBar,
              private examenService:ExamenService,
              private router:Router) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (data:any) =>{
        this.categorias = data;
        console.log(this.categorias);
      }, error => {
        console.log(error);
        Swal.fire('Error!!','Error al cargar los datos','error');
      }
    )
  }

  guardarCuestionario(){
    console.log(this.examenData);
    if (this.examenData.titulo.trim() == '' || this.examenData.titulo == null){
      this.snack.open('El titulo es requerido','',{
        duration: 3000
      });
      return;
    }

    this.examenService.agregarExamen(this.examenData).subscribe(
      (data:any) => {
        console.log(data);
        Swal.fire('Examen guardado','El examen ha sido guardado con exito','success');
        this.examenData = {
          titulo: '',
          descripcion: '',
          puntosMaximos: '',
          numeroDePreguntas: '',
          activo:true,
          categoria: {
            categoriaId: ''
          }
        }
        this.router.navigate(['/admin/examenes']);
      },error => {
        Swal.fire('Error','Error al agregar examen','error');
      }
    )
  }
}
