import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from "../nav/nav.component";
import { FormationsService } from "../../services/formation.service";
import { Session } from "../../public/session";
import { Sessionformation } from "../../public/sessionformation";


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterModule, NavComponent, CommonModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  formations: Session[] = [];
  categories: string[] = [];
  sessions: Sessionformation[] = [];

  constructor(private formationsService: FormationsService) { }

  ngOnInit(): void {
    this.loadFormations();
  }

  private loadFormations(): void {
    this.formationsService.getAllFormation().subscribe({
      next: (res) => {
        this.formations = res;
        this.extractCategories();
      },
      error: (err) => {
        console.error('Error fel rechercher nta3 les formattion :', err);
      }
    });
  }

   extractCategories(): void {
    const allCategories = this.formations
      .map(formation => formation.categories)
      .flat();
    this.categories = [...new Set(allCategories)];
  }

  getSessionsForFormation(formationId: number): Sessionformation[] {
    return this.sessions.filter(session => session.formation.id === formationId);
  }

  findFormationByCategorie(cat: string): Session | undefined {
    return this.formations.find((formations) => formations.categories.includes(cat));
  }

  findAllFormationByCategorie(cat: string): Session[] {
    return this.formations.filter((formations) => formations.categories.includes(cat));
  }
}