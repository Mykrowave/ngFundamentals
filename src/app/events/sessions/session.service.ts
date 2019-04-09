import { Injectable } from '@angular/core';
import { ISession } from '../shared/isession';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  hasUserVoted(session: ISession, userName: string): boolean {
    return session.voters.some(sv => sv === userName);
  }

  deleteVoter(eventId: number, session: ISession, userName: string) {
    session.voters = session.voters.filter(v => v !== userName);
    this.http.delete<ISession>(`/api/events/${eventId}/sessions/${session.id}/voters/${userName}`, {})
      .pipe(catchError(this.handleError<ISession>('deleteVoter'))).subscribe();
  }

  addVoter(eventId: number, session: ISession, userName: string) {
    session.voters.push(userName);
    this.http.post<ISession>(`/api/events/${eventId}/sessions/${session.id}/voters/${userName}`, {})
      .pipe(catchError(this.handleError<ISession>('addVoter'))).subscribe();

  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
