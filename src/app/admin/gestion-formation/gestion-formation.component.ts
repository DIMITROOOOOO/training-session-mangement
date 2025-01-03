import { Component, OnInit } from '@angular/core';
import { FormationsService } from '../../services/formation.service';
import { Session } from '../../public/session';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-formation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gestion-formation.component.html',
  styleUrls: ['./gestion-formation.component.css'],
  

})
export class GestionFormationComponent implements OnInit {
  formations: Session[] = []; 
  selectedFormation: Session = new Session(0, '', '', 0, '', '', [], []);
  isEditing: boolean = false;

  constructor(private formationsService: FormationsService) { }

  ngOnInit(): void {
    this.loadFormations(); 
  }

  get tagsAsString(): string {
    return this.selectedFormation.tags.join(', ');
  }

  set tagsAsString(value: string) {
    this.selectedFormation.tags = value.split(',').map(tag => tag.trim());
  }

  get categoriesAsString(): string {
    return this.selectedFormation.categories.join(', ');
  }

  set categoriesAsString(value: string) {
    this.selectedFormation.categories = value.split(',').map(category => category.trim());
  }

  loadFormations(): void {
    this.formationsService.getAllFormation().subscribe({
      next: (data: Session[]) => {
        this.formations = data.map((session: any) => new Session(
          session.id,
          session.titre,
          session.description,
          session.duree,
          session.programme,
          session.niveau,
          session.tags,
          session.categories
        ));
      },
      error: (err) => {
        console.error('Error loading formations:', err);
      }
    });
  }

  addFormation(): void {
    this.formationsService.addFormation(this.selectedFormation).subscribe({
      next: (data: Session) => {
        const newFormation = new Session(
          data.id,
          data.titre,
          data.description,
          data.duree,
          data.programme,
          data.niveau,
          data.tags,
          data.categories
        );
        this.formations.push(newFormation); 
        this.resetForm(); 
      },
      error: (err) => {
        console.error('Error adding formation:', err);
      }
    });
  }

  editFormation(formation: Session): void {
    this.selectedFormation = new Session(
      formation.id,
      formation.titre,
      formation.description,
      formation.duree,
      formation.programme,
      formation.niveau,
      formation.tags,
      formation.categories
    ); 
    this.isEditing = true; 
  }

  updateFormation(): void {
    this.formationsService.updateFormation(this.selectedFormation).subscribe({
      next: (data: Session) => {
        const updatedFormation = new Session(
          data.id,
          data.titre,
          data.description,
          data.duree,
          data.programme,
          data.niveau,
          data.tags,
          data.categories
        );
        const index = this.formations.findIndex(f => f.id === updatedFormation.id);
        if (index !== -1) {
          this.formations[index] = updatedFormation; 
        }
        this.resetForm();
      },
      error: (err) => {
        console.error('Error updating formation:', err);
      }
    });
  }

  deleteFormation(id: number): void {
    this.formationsService.deleteFormation(id).subscribe({
      next: () => {
        this.formations = this.formations.filter(f => f.id !== id); 
      },
      error: (err) => {
        console.error('Error deleting formation:', err);
      }
    });
  }

  resetForm(): void {
    this.selectedFormation = new Session(0, '', '', 0, '', '', [], []);
    this.isEditing = false; 
  }
}