import { Component, OnInit } from '@angular/core';
import {CategoriaService} from "../../../services/categoria.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrls: ['./view-categorias.component.css']
})
export class ViewCategoriasComponent implements OnInit {
/*
Creamos el objeto any e inyectamos el servicio en el constructor

 */
  categorias:any = [

  ]

  constructor(private categoriaService:CategoriaService) { }
/*
Cuando se ejecute el componente una sola vez
Y llama nuestra api rest y al suscribirnos nos muestra
los que deberia
 */
  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (data:any) =>{
        this.categorias = data;
        console.log(this.categorias);
      },error => {
        console.log(error);
        Swal.fire('Error al cargar las categorias', 'error');
      }
    )
  }

}
