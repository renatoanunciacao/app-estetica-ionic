import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroFornecedorPageRoutingModule } from './cadastro-fornecedor-routing.module';

import { CadastroFornecedorPage } from './cadastro-fornecedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroFornecedorPageRoutingModule
  ],
  declarations: [CadastroFornecedorPage]
})
export class CadastroFornecedorPageModule {}
