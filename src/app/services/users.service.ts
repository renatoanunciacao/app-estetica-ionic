import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from  './../classes/user';
import { AlertServiceService } from './alert-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  base_path = "https://services-estetica.herokuapp.com/estetica/servicos";
  constructor(private router: Router,
    private httpClient: HttpClient, 
    public alertService: AlertServiceService) { }

    login(user: User) {
      this.httpClient.post(`base_path/login`, user)
        .subscribe(data => {
          let status = data['status'];
          let message = data['message'];
        
          if (status == 200) {
            this.alertService.toast("Login efetuado com sucesso!");
            localStorage.setItem("PS:USER_INFO", JSON.stringify(message));
            
            this.router.navigate(['/tabs']);
          }
          else
            this.alertService.alert("Erro", "Informações incorretas!");
        }, error => {
          console.log(error);
        });
    }
  
    logout() {
      localStorage.removeItem("PS:USER_INFO");
      this.router.navigate(['/login']);
    }
}
