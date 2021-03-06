import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'servicos-disponiveis',
    loadChildren: () => import('./servicos-disponiveis/servicos-disponiveis.module').then( m => m.ServicosDisponiveisPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'cadastro-servico',
    loadChildren: () => import('./cadastro-servico/cadastro-servico.module').then( m => m.CadastroServicoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'fornecedores',
    loadChildren: () => import('./fornecedores/fornecedores.module').then( m => m.FornecedoresPageModule)
  },
  {
    path: 'cadastro-fornecedor',
    loadChildren: () => import('./cadastro-fornecedor/cadastro-fornecedor.module').then( m => m.CadastroFornecedorPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
