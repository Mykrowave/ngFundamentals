import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ISession } from '../../shared/isession';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input() sessions: ISession;
  @Output() addSession = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addSessionMode() {
    this.addSession.emit(true);
  }

}
