import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from './public/accueil/accueil.component';
import { NavComponent } from './public/nav/nav.component';
import { AccueilComponent as accueiladmin } from './admin/accueil/accueil.component';

@NgModule({
  declarations: [],
  imports: [
    NavComponent,
    CommonModule,
    RouterOutlet,
    AccueilComponent,
    accueiladmin
  ]
})
export class PublicModule { }
