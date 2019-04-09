import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { EventService } from 'src/app/events/shared/event.service';
import { ISession } from 'src/app/events/shared/isession';
import { IEvent } from 'src/app/events/shared/ievent';
import { EventsListComponent } from 'src/app/events/events-list/events-list.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchTerm = '';
  foundSessions: ISession[];
  events: IEvent[];
  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().forEach(data => {
      this.events = data;
    });

    console.log(this.events);
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(results => {
      this.foundSessions = results;
      console.log(this.foundSessions);
    });

  }

}
