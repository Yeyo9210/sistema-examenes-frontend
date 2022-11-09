import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //Se utiliza para acceder a los datos desde el html
  user:any = null;

  constructor(private loginService:LoginService) { }

  /*
  La primera vez que se cargue se incializa solamente una vez y cargue la información
  y obtiene el usuario actual si es admin o usuario normal
   */
  ngOnInit(): void {
    this.user = this.loginService.getUser();
   /* this.loginService.getCurrentUser().subscribe(
      (user:any) => {
        this.user = user;
      },error => {
        alert("error");
      }
    )*/
  }

}
