import { Component, OnInit } from '@angular/core';
import { FormationsService } from '../../services/formation.service';
import { Session } from '../../public/session';
import{ RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  standalone: true,
  styleUrls: ['./formation.component.css'],
  imports: [NavComponent, RouterModule, FormsModule],
})
export class FormationComponent implements OnInit {
  searchKeyword: string = '';
  searchResults: Session[] = [];
  formations: Session[] = [];

  constructor(private formationsService: FormationsService) {}

  ngOnInit(): void {
    this.formationsService.getAllFormation().subscribe({
      next: (res) => {
        this.formations = res;
      },
    });
  }

  searchFormations(): void {
    const keyword = this.searchKeyword.toLowerCase();

    this.searchResults = this.formations.filter((formation) =>
      formation.tags.some((tag) => tag.toLowerCase().includes(keyword))
    );
    console.log('tag eli ktbto :', keyword);
    console.log('resultat:', this.searchResults);

  }
  
}
