import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [],
  imports: [
    NavComponent,
    CommonModule,
    RouterOutlet,
    AccueilComponent,
  ]
})
export class PublicModule { }
