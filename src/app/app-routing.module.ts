import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {LoginComponent} from "./pages/login/login.component";
import {UserDashboardComponent} from "./pages/user/user-dashboard/user-dashboard.component";
import {DashboardComponent} from "./pages/admin/dashboard/dashboard.component";
import {AdminGuard} from "./services/admin.guard";
import {NormalGuard} from "./services/normal.guard";
import {ProfileComponent} from "./pages/profile/profile.component";
import {WelcomeComponent} from "./pages/admin/welcome/welcome.component";
import {ViewCategoriasComponent} from "./pages/admin/view-categorias/view-categorias.component";
import {AddCategoriaComponent} from "./pages/admin/add-categoria/add-categoria.component";
import {ViewExamenesComponent} from "./pages/admin/view-examenes/view-examenes.component";
import {AddExamenComponent} from "./pages/admin/add-examen/add-examen.component";
import {ActualizarExamenComponent} from "./pages/admin/actualizar-examen/actualizar-examen.component";
import {ViewExamenPreguntasComponent} from "./pages/admin/view-examen-preguntas/view-examen-preguntas.component";

/*
En routes se confuguran todas las rutas
 */
const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: 'admin',
    component: DashboardComponent,
    //Para poder acceder a otros componentes hijos se debe quitar el patMatch full
    //pathMatch: 'full',
    canActivate: [AdminGuard],
    //Children es un componente hijo del administrador
    children:[
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'categorias',
        component: ViewCategoriasComponent
      },
      {
        path: 'add-categoria',
        component: AddCategoriaComponent
      },
      {
        path: 'examenes',
        component: ViewExamenesComponent
      },
      {
        path: 'add-examen',
        component: AddExamenComponent
      },
      {
        path: 'examen/:examenId',
        component: ActualizarExamenComponent
      },
      {
        path: 'ver-preguntas/:examenId/:titulo',
        component: ViewExamenPreguntasComponent
      }
    ]
},
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: "full",
    canActivate:[NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
