import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../public/session';
import { Sessionformation } from '../public/sessionformation';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {
  private readonly baseUrl: string = 'http://localhost:3000';
  private readonly formationsUrl: string = `${this.baseUrl}/Session`;
  private readonly sessionsUrl: string = `${this.baseUrl}/Sessionformation`;

  constructor(private http: HttpClient) { }

  getAllFormation(): Observable<Session[]> {
    return this.http.get<Session[]>(this.formationsUrl);
  }

  getFormationById(id: string): Observable<Session> {
    return this.http.get<Session>(`${this.formationsUrl}/${id}`);
  }
  getFormationsByTag(tag: string): Observable<Session[]> {
    return this.http.get<Session[]>(`${this.formationsUrl}?tags_like=${tag}`);
  }
  addFormation(body: any) {
    return this.http.post(this.formationsUrl, body);
  }

  getAllSessions(): Observable<Sessionformation[]> {
    return this.http.get<Sessionformation[]>(this.sessionsUrl);
  }

  getSessionsByFormation(formationId: number): Observable<Sessionformation[]> {
    return this.http.get<Sessionformation[]>(`${this.sessionsUrl}?formationId=${formationId}`);
  }
}