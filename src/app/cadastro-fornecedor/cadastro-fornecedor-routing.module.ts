import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroFornecedorPage } from './cadastro-fornecedor.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroFornecedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroFornecedorPageRoutingModule {}
