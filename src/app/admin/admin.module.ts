import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GestionFormationComponent } from './gestion-formation/gestion-formation.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    GestionFormationComponent,
    CommonModule,
   RouterModule,
   FormsModule
    
  ]
})
export class AdminModule { }
