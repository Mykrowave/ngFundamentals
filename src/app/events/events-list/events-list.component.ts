import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events;
  constructor(private eventService: EventService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  ThumbnailClick(eventName: string) {
    this.toastrService.Success(eventName);
  }
}
