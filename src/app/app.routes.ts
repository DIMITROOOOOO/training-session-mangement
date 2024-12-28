import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './public/accueil/accueil.component';
import { FormationComponent } from './public/formation/formation.component';
import { DetailComponent } from './public/detail/detail.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'formations', component: FormationComponent },
  { path: 'detail/:id', component: DetailComponent },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
