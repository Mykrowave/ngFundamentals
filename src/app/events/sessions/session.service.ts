import { Injectable } from '@angular/core';
import { ISession } from '../shared/isession';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  hasUserVoted(session: ISession, userName: string): boolean {
    return session.voters.some(sv => sv === userName);
  }

  deleteVoter(session: ISession, userName: string) {
    session.voters = session.voters.filter(v => v !== userName);
  }

  addVoter(session: ISession, userName: string) {
    session.voters.push(userName);
  }
}
