import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cadastro-usuario',
        loadChildren: () => import('../cadastro-usuario/cadastro-usuario-routing.module').then(m => m.CadastroUsuarioPageRoutingModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login-routing.module').then(m => m.LoginPageRoutingModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'servicos',
        loadChildren: () => import('../servicos-disponiveis/servicos-disponiveis-routing.module').then(m => m.ServicosDisponiveisPageRoutingModule)
      },
      {
        path: 'fornecedores',
        loadChildren: () => import('../fornecedores/fornecedores.module').then(m => m.FornecedoresPageModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('../clientes/clientes.module').then(m => m.ClientesPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
