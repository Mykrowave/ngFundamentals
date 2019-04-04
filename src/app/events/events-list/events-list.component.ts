import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from 'src/app/common/toastr.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events;
  constructor(private eventService: EventService, private toastrService: ToastrService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.eventService.getEvents().subscribe(events => { this.events = events; });
    this.events = this.activatedRoute.snapshot.data.events;
  }
  ThumbnailClick(eventName: string) {
    this.toastrService.Success(eventName);
  }
}
