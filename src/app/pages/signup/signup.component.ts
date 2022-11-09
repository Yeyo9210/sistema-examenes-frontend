import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  }

  constructor(private userServices:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema','success');
    if (this.user.username == '' || this.user.username == null){
      this.snack.open('El nombre de usuario es requerido!!', 'Aceptar',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: "right"
      });
      return;
    }

    this.userServices.añadirUsuario(this.user).subscribe(
    (data) => {
      console.log(data);

    },(error) => {
      console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema!!', 'Aceptar',{
          duration: 3000
        });
      }
    )
  }

}
