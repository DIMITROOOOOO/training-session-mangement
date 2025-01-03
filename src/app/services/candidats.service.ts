import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from '../public/candidates';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private apiUrl = 'http://localhost:3000/candidateur';
  
  constructor(private http: HttpClient) {}

  addCandidat(candidat: Candidat): Observable<Candidat> {
    return this.http.post<Candidat>(this.apiUrl, candidat);
  }
}