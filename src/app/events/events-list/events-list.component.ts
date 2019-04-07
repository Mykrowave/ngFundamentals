import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/ievent';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];
  constructor(private eventService: EventService,
              @Inject(TOASTR_TOKEN) private toastr: Toastr,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.activatedRoute.snapshot.data.events;
  }
  ThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
