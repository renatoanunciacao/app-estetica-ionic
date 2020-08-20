import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';
import { HttpClient } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { Service } from '../classes/service';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.page.html',
  styleUrls: ['./cadastro-fornecedor.page.scss'],
})
export class CadastroFornecedorPage implements OnInit {
  private services = [];
  service: Service;
  base_path = "https://services-estetica.herokuapp.com/estetica/servicos";
  constructor(private serviceData: DataServiceService) {
    this.buscarServicos();
   }
  ngOnInit() {
  }

  buscarServicos(){
    this.serviceData.getAllServices().subscribe(data =>
      {
        console.log(data);
        this.services = data;
      },error =>
      {
        console.log(error);
      },() =>
      {
        console.log('dados carregados!');
      });
  }
}
