import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicosDisponiveisPageRoutingModule } from './servicos-disponiveis-routing.module';

import { ServicosDisponiveisPage } from './servicos-disponiveis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicosDisponiveisPageRoutingModule
  ],
  declarations: [ServicosDisponiveisPage]
})
export class ServicosDisponiveisPageModule {}
