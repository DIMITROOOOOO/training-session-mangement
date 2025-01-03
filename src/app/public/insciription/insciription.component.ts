import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Candidat } from '../../public/candidates';
import { NavComponent } from '../nav/nav.component';
import { RouterModule } from '@angular/router';
import { CandidatService } from '../../services/candidats.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormationsService } from '../../services/formation.service';

@Component({
  selector: 'app-insciription',
  standalone: true,
  imports: [NavComponent, RouterModule, FormsModule],
  templateUrl: './insciription.component.html',
  styleUrl: './insciription.component.css'
})
export class InsciriptionComponent implements OnInit {
  sessionId: string = '';
  constructor(private candidatService: CandidatService, 
    private router: Router,
    private formationService: FormationsService,
    private route: ActivatedRoute,) {}
    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.sessionId = id; 
          this.formationService.getFormationById(id).subscribe({
            next: (formation) => {
              console.log('Formation details:', formation);
            },
            error: (error) => {
              console.error('Error fetching formation:', error);
            }
          });
        }
      });
    }
  addcondidat(f: NgForm) {
    if (f.valid) {
      const candidat = new Candidat(
        f.value.id,
        f.value.nom,
        f.value.prenom,
        f.value.email,
        f.value.cin
      );
  
      this.candidatService.addCandidat(candidat).subscribe({
        next: () => {
          this.router.navigate(['/accueil']); 
          console.log('Candidat ajouter');
        },
        error: (err) => {
          console.error('Error adding candidat:', err);
        }
    
      });
    }
  }
}