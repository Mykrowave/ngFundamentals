import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: any;
  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const routeId: number = +this.activatedRoute.snapshot.params.id;
    this.event = this.eventService.getEvent(routeId);
  }

}
