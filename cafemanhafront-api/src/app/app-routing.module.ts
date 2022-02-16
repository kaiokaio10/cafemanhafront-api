import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'participante',
    loadChildren: () => import(`./pessoa/pessoa-routing.module`).then(m => m.PessoaRoutingModule),
  },
  {
    path: '',
    loadChildren: () => import(`./home/home-routing.module`).then(m => m.HomeRoutingModule),
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
