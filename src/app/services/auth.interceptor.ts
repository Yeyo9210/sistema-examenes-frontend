import {Injectable} from "@angular/core";
import {HttpEvent, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoginService} from "./login.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {
  }

  //Nos servira para interceptar solicitudes y respuestas http
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.loginService.getToken();
    if (token != null) {
      authReq = authReq.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      })
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  {
    /*
    provide nos servira para las intercepciones
    multi Nos servira para agregar la cantidad de interceptores que deseemos
     */
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }
]
