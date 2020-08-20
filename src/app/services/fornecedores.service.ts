import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { Fornecedor } from '../classes/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  base_path = "https://services-estetica.herokuapp.com/estetica"
  constructor(private httpClient: HttpClient, private route: Router) {  }

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


  carregaTudo():Observable<FornecedoresService[]>{
   return  this.httpClient.get(this.base_path + '/fornecedor')
    .pipe(
      map((response : any) =>   response)
      );
  }

  insertFornecedor(item): Observable<Fornecedor>{
    return this.httpClient
      .post<Fornecedor>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  }

}
