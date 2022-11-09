import { Component, OnInit } from '@angular/core';
import {CategoriaService} from "../../../services/categoria.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {

  categoria = {
    titulo : '',
    descripcion : ''
  }
/*
Inyectamos categoriaService y snackBar
 */
  constructor(private categoriaService:CategoriaService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }
  /*
  Metodo para agregar titulo y descripcion
  Al momento de guardar los datos se van a volver vacios y se limpien los campos
   */
  formSubmit(){
    if (this.categoria.titulo == '' || this.categoria.titulo == null){
      this.snack.open("El titulo es requerido !!",'',{
        duration:3000
      })
      return;
    }
    this.categoriaService.agregarCategoria(this.categoria).subscribe(
      (data:any) =>{
        this.categoria.titulo = '';
        this.categoria.descripcion = '';
        Swal.fire('Categoria agregada','La categoria ha sido agregada con exito', 'success');
        this.router.navigate(['/admin/categorias']);
      },error => {
        console.log(error);
        Swal.fire('Error !!','Error al guardar la categoria','error')
      }
    )
  }
}
