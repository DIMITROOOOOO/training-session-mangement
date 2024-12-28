import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ActivatedRoute } from '@angular/router';
import { FormationsService } from '../../services/formation.service';
import { Session } from '../../public/session';
import { Sessionformation } from '../../public/sessionformation';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  formation: Session | null = null;
  sessions: Sessionformation[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadFormationData(id);
      }
    });
  }

  private loadFormationData(id: string): void {
    this.isLoading = true;
    this.error = null;

    this.formationsService.getFormationById(id).subscribe({
      next: (formation) => {
        this.formation = formation;
        this.loadSessions(formation.id);
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement de la formation';
        this.isLoading = false;
        console.error('Error loading formation:', err);
      }
    });
  }

  private loadSessions(formationId: number): void {
    this.formationsService.getSessionsByFormation(formationId).subscribe({
      next: (sessions) => {
        this.sessions = sessions;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des sessions';
        this.isLoading = false;
        console.error('Error loading sessions:', err);
      }
    });
  }
}