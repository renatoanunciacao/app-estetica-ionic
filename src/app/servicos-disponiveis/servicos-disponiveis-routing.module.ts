import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosDisponiveisPage } from './servicos-disponiveis.page';

const routes: Routes = [
  {
    path: '',
    component: ServicosDisponiveisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosDisponiveisPageRoutingModule {}
