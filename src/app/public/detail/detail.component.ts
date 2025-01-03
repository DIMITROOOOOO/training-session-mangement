import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ActivatedRoute } from '@angular/router';
import { FormationsService } from '../../services/formation.service';
import { Session } from '../../public/session';
import { Sessionformation } from '../../public/sessionformation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NavComponent,RouterModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  formation: Session | null = null;
  sessions: Sessionformation[] = [];

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

    this.formationsService.getFormationById(id).subscribe({
      next: (formation) => {
        this.formation = formation;
        this.loadSessions(formation.id);
      },
      error: (err) => {
        console.error('Error loading formation:', err);
      }
    });
  }

  private loadSessions(formationId: number): void {
    this.formationsService.getSessionsByFormation(formationId).subscribe({
      next: (sessions) => {
        this.sessions = sessions;
      },
      error: (err) => {
        console.error('Error loading sessions:', err);
      }
    });
  }
}