import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { Service } from '../classes/service';
import { Router } from '@angular/router';
import { AlertServiceService } from '../services/alert-service.service';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.page.html',
  styleUrls: ['./cadastro-servico.page.scss'],
})
export class CadastroServicoPage implements OnInit {

  service: Service;
  constructor(private dataService : DataServiceService, public router: Router, private alertService: AlertServiceService ) { 
    this.service = new Service();
  }

  ngOnInit() {
  }

  cadastrar(){
    this.dataService.insertService(this.service).subscribe((response) => {
      setTimeout(() => { 
        this.alertService.toast("Serviço criado com sucesso!");
        this.router.navigate(['/tabs/servicos']);
      }, 3000);
    });
  }

}
