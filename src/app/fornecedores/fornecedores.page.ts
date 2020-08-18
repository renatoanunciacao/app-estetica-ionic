import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from '../services/fornecedores.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.page.html',
  styleUrls: ['./fornecedores.page.scss'],
})
export class FornecedoresPage implements OnInit {
  private result = [];
  constructor(private fornecedoresService: FornecedoresService) {
this.buscarFornecedores()
   }

  ngOnInit() {
  }

  buscarFornecedores(){
    this.fornecedoresService.carregaTudo().subscribe(data =>
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
