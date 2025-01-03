import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './public/accueil/accueil.component';
import { DetailComponent } from './public/detail/detail.component';
import { InsciriptionComponent } from './public/insciription/insciription.component';
import { GestionFormateurComponent } from './admin/gestion-formateur/gestion-formateur.component';
import { GestionFormationComponent } from './admin/gestion-formation/gestion-formation.component';
import { GestionSessionComponent } from './admin/gestion-session/gestion-session.component';
const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'insciription/:id', component: InsciriptionComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'gestion-formation', component: GestionFormationComponent },
  { path: 'gestion-formateur', component: GestionFormateurComponent },
  { path: 'gestion-session', component: GestionSessionComponent },
  { path: '', redirectTo: '/admin-space', pathMatch: 'full' } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
