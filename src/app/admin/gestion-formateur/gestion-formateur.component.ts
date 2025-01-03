import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../../services/formateur.service';
import { Formateur } from '../../public/formateur';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-formateur',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gestion-formateur.component.html'
})
export class GestionFormateurComponent implements OnInit {
  formateurs: Formateur[] = [];
  selectedFormateur: Formateur = new Formateur(0, '', '', '', '', '', '', '', []);
  isEditing: boolean = false;

  constructor(private formateurService: FormateurService) { }

  ngOnInit(): void {
    this.loadFormateurs();
  }

  get specialitesAsString(): string {
    return this.selectedFormateur.specialites.join(', ');
  }

  set specialitesAsString(value: string) {
    this.selectedFormateur.specialites = value.split(',').map(spec => spec.trim());
  }

  loadFormateurs(): void {
    this.formateurService.getAllFormateurs().subscribe({
      next: (data: Formateur[]) => {
        this.formateurs = data.map((formateur: any) => new Formateur(
          formateur.id,
          formateur.nom,
          formateur.prenom,
          formateur.email,
          formateur.phoneNumber,
          formateur.carteIdentite,
          formateur.photo,
          formateur.cv,
          formateur.specialites
        ));
      },
      error: (err) => {
        console.error('Err fel loading ntaa les formateur', err);
      }
    });
  }

  addFormateur(): void {
    this.formateurService.addFormateur(this.selectedFormateur).subscribe({
      next: (data: Formateur) => {
        const newFormateur = new Formateur(
          data.id,
          data.nom,
          data.prenom,
          data.email,
          data.phoneNumber,
          data.carteIdentite,
          data.photo,
          data.cv,
          data.specialites
        );
        this.formateurs.push(newFormateur);
        this.resetForm();
      },
      error: (err) => {
        console.error('Error fel ajout de formateur:', err);
      }
    });
  }

  editFormateur(formateur: Formateur): void {
    this.selectedFormateur = new Formateur(
      formateur.id,
      formateur.nom,
      formateur.prenom,
      formateur.email,
      formateur.phoneNumber,
      formateur.carteIdentite,
      formateur.photo,
      formateur.cv,
      formateur.specialites
    );
    this.isEditing = true;
  }

  updateFormateur(): void {
    this.formateurService.updateFormateur(this.selectedFormateur).subscribe({
      next: (data: Formateur) => {
        const updatedFormateur = new Formateur(
          data.id,
          data.nom,
          data.prenom,
          data.email,
          data.phoneNumber,
          data.carteIdentite,
          data.photo,
          data.cv,
          data.specialites
        );
        const index = this.formateurs.findIndex(f => f.id === updatedFormateur.id);
        if (index !== -1) {
          this.formateurs[index] = updatedFormateur;
        }
        this.resetForm();
      },
      error: (err) => {
        console.error('Err fel update :', err);
      }
    });
  }

  deleteFormateur(id: number): void {
    this.formateurService.deleteFormateur(id).subscribe({
      next: () => {
        this.formateurs = this.formateurs.filter(f => f.id !== id);
      },
      error: (err) => {
        console.error('Err fel delet:', err);
      }
    });
  }

  resetForm(): void {
    this.selectedFormateur = new Formateur(0, '', '', '', '', '', '', '', []);
    this.isEditing = false;
  }
}