import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './public/accueil/accueil.component';
import { FormationComponent } from './public/formation/formation.component';
import { DetailComponent } from './public/detail/detail.component';
import { InsciriptionComponent } from './public/insciription/insciription.component';
import { AccueilComponent as accueiladmin } from './admin/accueil/accueil.component';
import { GestionFormateurComponent } from './admin/gestion-formateur/gestion-formateur.component';
import { GestionFormationComponent } from './admin/gestion-formation/gestion-formation.component';
import { GestionSessionComponent } from './admin/gestion-session/gestion-session.component';
export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'formations', component: FormationComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'insciription/:id', component: InsciriptionComponent },
  { path: 'accueil', component: AccueilComponent },

  {
    path: 'admin/accueil',component:accueiladmin,},
     { path: 'gestion-formation', component: GestionFormationComponent },
      { path: 'gestion-formateur', component: GestionFormateurComponent },
      { path: 'gestion-session', component: GestionSessionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
