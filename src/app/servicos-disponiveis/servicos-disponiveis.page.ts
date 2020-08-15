import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { NavController } from '@ionic/angular';
import { CadastroServicoPage } from '../cadastro-servico/cadastro-servico.page';
import { CadastroServicoPageModule } from '../cadastro-servico/cadastro-servico.module';
import { CadastroServicoPageRoutingModule } from '../cadastro-servico/cadastro-servico-routing.module';

@Component({
  selector: 'app-servicos-disponiveis',
  templateUrl: './servicos-disponiveis.page.html',
  styleUrls: ['./servicos-disponiveis.page.scss'],
})
export class ServicosDisponiveisPage implements OnInit {
  private result;
  constructor(private dataService : DataServiceService, public navCtrl: NavController) { 
    this.buscarServicos();
  }

  ngOnInit() {
    
  }

  buscarServicos(){
    this.dataService.getAllServices().subscribe(data =>
      {
        console.log(data);
        this.result = data;
      },error =>
      {
        console.log(error);
      },() =>
      {
        console.log('dados carregados!');
      });
  }

}
