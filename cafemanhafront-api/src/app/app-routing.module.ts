import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaCadastroComponent } from './pessoa/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaListagemComponent } from './pessoa/pessoa-listagem/pessoa-listagem.component';

const routes: Routes = [
  {
    path: 'pessoa',
    loadChildren: () => import(`./pessoa/pessoa-routing.module`).then(m => m.PessoaRoutingModule),
  },
  {
    path: 'listagem',
    component: PessoaListagemComponent,
  },
  {
    path: 'cadastro',
    component: PessoaCadastroComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
