import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/ievent';
import { ISession } from '../shared/isession';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  addMode: boolean;
  event: IEvent;
  filterBy = 'all';
  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const routeId: number = +this.activatedRoute.snapshot.params.id;
    this.event = this.eventService.getEvent(routeId);
    this.addMode = false;
  }

  addSessionMode(mode: boolean) {
    this.addMode = mode;
  }

  createNewSession(newSession: ISession) {
    const maxId = Math
      .max.apply(null, this.event.sessions.map(s => s.id)) + 1;

    newSession.id = maxId;
    this.event.sessions.push(newSession);
    this.eventService.updateEvent(this.event);
    this.addSessionMode(false);
  }


}
