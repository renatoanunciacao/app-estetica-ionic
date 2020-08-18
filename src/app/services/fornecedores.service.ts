import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  base_path = "https://services-estetica.herokuapp.com/estetica"
  constructor(private httpClient: HttpClient, private route: Router) {  }

  carregaTudo():Observable<FornecedoresService[]>{
   return  this.httpClient.get(this.base_path + '/fornecedor')
    .pipe(
      map((response : any) =>   response)
      );
  }

}
