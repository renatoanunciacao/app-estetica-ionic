import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from  './../classes/user';
import { AlertServiceService } from './alert-service.service';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  base_path = "https://services-estetica.herokuapp.com/estetica";
  
  constructor(private router: Router,
    private httpClient: HttpClient, 
    public alertService: AlertServiceService) { }
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };

    cadastrarUsuario(item): Observable<User> {
      return this.httpClient
        .post<User>(this.base_path + '/usuarios', JSON.stringify(item), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

    login(user: User) {
      const {nome, senha} = user;

      this.httpClient.post(this.base_path +'/login', user)
        .subscribe(data => {
          let status = data['status'];
          let message = data['token'];
          let unautorized = data['message'];

        
          if (message != null) {
            
            localStorage.setItem("PS:INFO_USER", JSON.stringify(message));
            
            setTimeout(() => { 
              this.alertService.toast("Login efetuado com sucesso!");
              this.router.navigate(['/tabs/home']);
            }, 3000);
          }
          else
            this.alertService.alert("Erro", "Informações incorretas!");
        }, error => {
          this.alertService.alert("Erro","Usuário não cadastrado");
        });
    }
  
    logout() {
      localStorage.removeItem("PS:INFO_USER");
      this.router.navigate(['/login']);
    }
}
