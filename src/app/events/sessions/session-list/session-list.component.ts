import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { ISession } from '../../shared/isession';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  visibleSessions: ISession[];
  @Input() sortBy = 'voters';
  @Input() filterBy = 'all';
  @Input() sessions: ISession[];
  @Output() addSession = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      switch (this.sortBy) {
        case 'voters': this.visibleSessions.sort(sortByVotersDesc); break;
        case 'name': this.visibleSessions.sort(sortByNameAsc); break;
      }
    }
  }
  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filter);
    }
  }

  addSessionMode() {
    this.addSession.emit(true);
  }

}

function sortByNameAsc(s1: ISession, s2: ISession): number {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotersDesc(s1: ISession, s2: ISession): number {
  return s2.voters.length - s1.voters.length;
}
