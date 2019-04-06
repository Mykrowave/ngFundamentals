import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { ISession } from '../../shared/isession';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  visibleSessions: ISession[];
  @Input() filterBy = 'all';
  @Input() sessions: ISession[];
  @Output() addSession = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
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
