import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';
import { FornecedoresService } from '../services/fornecedores.service';
import { HttpClient } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { Service } from '../classes/service';
import { Fornecedores } from '../classes/fornecedor';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.page.html',
  styleUrls: ['./cadastro-fornecedor.page.scss'],
})
export class CadastroFornecedorPage implements OnInit { 
  private select: [];
  private services = [];
  private fornecedor: Fornecedores;
  service: Service;
  base_path = "https://services-estetica.herokuapp.com/estetica/servicos";
  constructor(private serviceData: DataServiceService, private fornecedoresData: FornecedoresService) {
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

  OnChange(event){
    this.select = event.target.value;
    console.log("selecionado nome: " + event.target.value);
   /* this.fornecedor.Service.push(this.select);*/
    return this.select;
  }

  salvarFornecedor(){
    this.fornecedoresData.insertFornecedor(this.fornecedor).subscribe((response) => {
      
    });
  }
}
