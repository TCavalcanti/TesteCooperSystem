import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'investimentos',
    pathMatch: 'full'
  },

  {
    path: 'investimentos',
    loadChildren: () => import('./investimentos/investimentos.module').then(m => m.InvestimentosModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
